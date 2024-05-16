import { Button, Input, Modal, Select, message, Upload, Spin } from 'antd';
import React, { useState } from 'react';
import { callApi } from '../../../../utils/functions';
import useAllAdvertise from '../../../../hooks/useAllAdvertise';
const { Option } = Select;
import { LoadingOutlined } from '@ant-design/icons';

const Advertisement = () => {
    const { allAdd, isLoading, refetch } = useAllAdvertise()
    const [modalVisible, setModalVisible] = useState(false);
    const [size, setSize] = useState('');
    const [page, setPage] = useState('');
    const [banner, setBanner] = useState(null);

    const handleDelete = async (page) => {
        Modal.confirm({
            title: 'Confirm Delete',
            content: 'Are you sure you want to delete this social link?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: async () => {
                const res = await callApi('DELETE', `/api/advertisements/${page}`);
                console.log(res);
                if (res.message === 'Advertisement deleted successfully') {
                    message.success('Advertisement deleted successfully');
                    refetch();
                } else {
                    message.error('Failed to delete Advertisement');
                }
            },
        });
    };

    const handleSizeChange = (value) => {
        setSize(value);
    };

    if (isLoading) {
        return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
    }


    const handlePost = async () => {
        const formData = new FormData();
        formData.append('page', page);
        formData.append('banner_size', size);
        formData.append('banner', banner);
        try {
            const res = await callApi('POST', '/api/advertisements', formData);
            if (res.message === 'Advertisement created successfully.') {
                refetch();
                message.success('Advertisement created successfully.');
                setModalVisible(false);
                setPage('');
                setSize('');
                setBanner(null);
            } else {
                message.error('Failed to add social link');
            }
            console.log(res);
        } catch (error) {
            message.error('Failed to add social link');
        }
    };

    return (
        <div>
            <Button onClick={() => setModalVisible(true)}>Add Banner</Button>
            <Modal

                visible={modalVisible}
                onOk={handlePost}
                onCancel={() => {
                    setModalVisible(false);
                    setPage('');
                    setSize('');
                    setBanner(null);
                }}
            >

                <Input
                    className='col-md-8'
                    placeholder="Enter page"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                />

                <br />
                <br />
                <Select
                    className='col-md-8'
                    onChange={handleSizeChange}
                    placeholder="Select Add Size"
                    value={size || undefined}
                >
                    <Option value="300*300">300*300</Option>

                </Select>

                <br />
                <br />
                <Upload
                    className='col-md-8'
                    fileList={banner ? [banner] : []}
                    beforeUpload={(file) => {
                        setBanner(file);
                        return false;
                    }}
                >
                    <Button>Upload Banner Image</Button>
                </Upload>

            </Modal>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className='text-capitalize '>
                            <th>page</th>
                            <th>size</th>
                            <th>photo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAdd.map((item) => (
                            <tr key={item.id}>
                                <td>{item.page}</td>
                                <td>{item.banner_size}</td>
                                <td>
                                    <img src={item.banner} alt="" />
                                </td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Button type="primary" danger onClick={() => handleDelete(item.page)}>
                                            Delete
                                        </Button>
                                        <Button type="primary">
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

export default Advertisement;
