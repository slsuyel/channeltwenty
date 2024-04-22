import React, { useState } from 'react';
import { Button, Modal, Dropdown, Menu, Form, Input, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Option } = Select;

const Videos = () => {
    const [data, setData] = useState([
        {
            key: '1',
            title: 'Video 1',
            category: 'Category 1',
            src: 'https://www.example.com/video1.mp4',
        },
        {
            key: '2',
            title: 'Video 2',
            category: 'Category 2',
            src: 'https://www.example.com/video2.mp4',
        },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm(); // Define form instance

    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const handleOk = () => {
        form
            .validateFields()
            .then(values => {
                console.log('Modal Data:', values); // Log form values
                // Add logic for saving new video
                setModalVisible(false);
            })
            .catch(errorInfo => {
                console.error('Validation failed:', errorInfo);
            });
    };

    const menu = () => (
        <Menu>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Button type="primary" onClick={showModal} style={{ marginBottom: '20px' }}>
                <i className="fa-solid fa-video me-2"></i> Add Video
            </Button>
            <Modal
                title="Add Video"
                visible={modalVisible}
                getContainer={false}
                onCancel={handleCancel}
                okText="Add"
                onOk={handleOk}
            >
                <Form
                    form={form} // Pass form instance
                    layout="vertical"
                >

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: 'Please select a category!' }]}
                    >
                        <Select placeholder="Select a category">
                            <Option value="Latest">Latest</Option>
                            <Option value="Popular">Popular</Option>
                            <Option value="News">News</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Video Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input the title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Video Source"
                        name="src"
                        rules={[{ required: true, message: 'Please input the source URL!' }]}
                    >
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(record => (
                        <tr key={record.key}>
                            <td>{record.title}</td>
                            <td>{record.category}</td>
                            <td>
                                <Dropdown overlay={() => menu(record)} trigger={['click']}>
                                    <Button>
                                        Actions <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Videos;
