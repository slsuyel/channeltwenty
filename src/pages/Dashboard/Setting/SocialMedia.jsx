import { Button, Modal, Select, Input, message } from 'antd';
import React, { useState } from 'react';
import { callApi } from './../../../utils/functions';
import useSocialMedia from '../../../hooks/useSocialMedia';

const { Option } = Select;

const SocialMedia = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [link, setLink] = useState('');
    const { allSocial, isLoading, refetch } = useSocialMedia()


    const handlePlatformChange = (value) => {
        setSelectedPlatform(value);
    };

    const handleLinkChange = (value) => {
        setLink(value);
    };
    const postData = {
        platform: selectedPlatform,
        link: link
    };

    const handlePost = async () => {
        const res = await callApi('Post', '/api/social-links', postData);
        if (res.message) {
            message.success('Social link created successfully');
            refetch()
            setModalVisible(false)
        }
        else if (res.status == 400) {
            message.error('Platform has already been taken. Or Something went wrong');
        }
    };

    if (isLoading) {
        return null
    }

    const handleDelete = async (id) => {
        Modal.confirm({
            title: 'Confirm Delete',
            content: 'Are you sure you want to delete this social link?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: async () => {
                const res = await callApi('Delete', `/api/social-links/${id}`);
                if (res.message === 'Social link deleted successfully') {
                    message.success('Social link deleted successfully');
                    refetch();
                } else {
                    message.error('Failed to delete social link');
                }
            },
        });
    };

    return (
        <div>
            <Button onClick={() => setModalVisible(true)}>Add social</Button>
            <Modal
                title="Select Platform"
                visible={modalVisible}
                onOk={handlePost}
                onCancel={() => setModalVisible(false)}
            >
                <Select style={{ width: 200 }} onChange={handlePlatformChange} placeholder="Select platform">
                    <Option value="facebook">Facebook</Option>
                    <Option value="youtube">YouTube</Option>
                    <Option value="linkedin">LinkedIn</Option>
                    <Option value="twitter">Twitter</Option>
                    <Option value="instagram">Instagram</Option>
                    <Option value="whatsapp">WhatsApp</Option>
                </Select>
                <br />
                <br />
                <Input placeholder="Enter link" value={link} onChange={(e) => handleLinkChange(e.target.value)} />
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
                        {allSocial.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.platform}</td>
                                <td>{item.link}</td>
                                <td>

                                    <td>
                                        <Button type="primary" danger onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </td>

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
