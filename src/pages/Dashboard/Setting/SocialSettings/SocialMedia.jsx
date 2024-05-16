import { Button, Modal, Select, Input, message, Spin } from 'antd';
import React, { useState } from 'react';
import useSocialMedia from './../../../../hooks/useSocialMedia';
import { callApi } from '../../../../utils/functions';
import { LoadingOutlined } from '@ant-design/icons';

const { Option } = Select;

const SocialMedia = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [link, setLink] = useState('');
    const [editingItemId, setEditingItemId] = useState(null);
    const { allSocial, isLoading, refetch } = useSocialMedia();

    const handlePlatformChange = (value) => {
        setSelectedPlatform(value);
    };

    const handleLinkChange = (value) => {
        setLink(value);
    };

    const handlePost = async () => {
        const postData = { platform: selectedPlatform, link: link };
        const url = editingItemId ? `/api/social-links/${selectedPlatform}` : '/api/social-links';
        const method = editingItemId ? 'Post' : 'POST';

        const res = await callApi(method, url, postData);
        if (res.message) {
            message.success(editingItemId ? 'Social link updated successfully' : 'Social link created successfully');
            refetch();
            setModalVisible(false);
            setEditingItemId(null);
        } else if (res.status === 400) {
            message.error('Platform has already been taken. Or Something went wrong');
        }
    };

    const handleEdit = (platform) => {
        const selectedItem = allSocial.find((item) => item.platform === platform);
        if (selectedItem) {
            setSelectedPlatform(selectedItem.platform);
            setLink(selectedItem.link);
            setEditingItemId(selectedItem.id);
            setModalVisible(true);
        }
    };

    const handleDelete = async (id) => {
        Modal.confirm({
            title: 'Confirm Delete',
            content: 'Are you sure you want to delete this social link?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: async () => {
                const res = await callApi('DELETE', `/api/social-links/${id}`);
                if (res.message === 'Social link deleted successfully') {
                    message.success('Social link deleted successfully');
                    refetch();
                } else {
                    message.error('Failed to delete social link');
                }
            },
        });
    };

    if (isLoading) {
        return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
    }

    return (
        <div>
            <Button onClick={() => setModalVisible(true)}>Add social</Button>
            <Modal
                title={editingItemId ? 'Edit Social Link' : 'Add Social Link'}
                visible={modalVisible}
                onOk={handlePost}
                onCancel={() => {
                    setModalVisible(false);
                    setEditingItemId(null); // 4. Reset editing mode
                }}
            >
                <Select
                    style={{ width: 200 }}
                    onChange={handlePlatformChange}
                    placeholder="Select platform"
                    value={selectedPlatform}
                    disabled={editingItemId}
                >
                    <Option value="facebook">Facebook</Option>
                    <Option value="youtube">YouTube</Option>
                    <Option value="linkedin">LinkedIn</Option>
                    <Option value="twitter">Twitter</Option>
                    <Option value="instagram">Instagram</Option>
                    <Option value="whatsapp">WhatsApp</Option>
                </Select>
                <br />
                <br />
                <Input
                    placeholder="Enter link"
                    value={link}
                    onChange={(e) => handleLinkChange(e.target.value)}
                />
            </Modal>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Platform</th>
                            <th>Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSocial.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.platform}</td>
                                <td>{item.link}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button type="primary" danger onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </Button>
                                        <Button type="primary" onClick={() => handleEdit(item.platform)}>
                                            Edit
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SocialMedia;
