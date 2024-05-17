import React, { useEffect, useState } from 'react';
import { Button, Modal, Dropdown, Menu, Form, Input, Select, message } from 'antd';
import { DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { callApi } from './../../../utils/functions';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import useAllVideoCategories from '../../../hooks/useAllVideoCategories';
import VideoSetting from '../Setting/VideoSetting/VideoSetting';
const { Option } = Select;
const { confirm } = Modal;

const Videos = () => {
    const { allCategories, isLoading } = useAllVideoCategories()
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editVideoData, setEditVideoData] = useState(null);
    const [form] = Form.useForm();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoader(true);
        try {
            const res = await callApi('GET', '/api/videos');
            setData(res.data);
            setLoader(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
        setEditModalVisible(false);
        setEditVideoData(null); // Reset edit data
        form.resetFields(); // Reset form fields
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const res = await callApi("POST", '/api/videos', values);
            if (res.title) {
                message.success('Video add')
                fetchData();
                setModalVisible(false);
            }
            else message.error('failed: Something went wrong,Change the title or reload the page')


        } catch (errorInfo) {
            console.error('Validation failed:', errorInfo);
        }
    };

    const handleEditOk = async () => {
        try {
            const values = await form.validateFields();
            const res = await callApi("POST", `/api/videos/${editVideoData.id}`, values);
            console.log(res);
            setEditModalVisible(false);
            fetchData();
        } catch (errorInfo) {
            console.error('Validation failed:', errorInfo);
        }
    };

    const deleteVideo = async (id) => {
        try {
            await callApi('DELETE', `/api/videos/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    const showDeleteConfirm = (record) => {
        confirm({
            title: 'Are you sure you want to delete this video?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteVideo(record.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const showEditModal = (record) => {
        setEditVideoData(record);
        setEditModalVisible(true);
        form.setFieldsValue(record);
    };

    if (loader || isLoading) {
        return <SkeletonLoader />;
    }

    const menu = (record) => (
        <Menu>
            <Menu.Item key="edit" onClick={() => showEditModal(record)}>Edit</Menu.Item>
            <Menu.Item key="delete" onClick={() => showDeleteConfirm(record)}>Delete</Menu.Item>
        </Menu>
    );



    return (
        <div>


            <hr />
            <VideoSetting />

            <hr />

            <h3>All Video with category</h3>

            <Button type="primary" onClick={showModal} style={{ marginBottom: '20px' }}>
                <i className="fa-solid fa-video me-2"></i> Add Video
            </Button>


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
                            <td>{record.category_name}</td>
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

            <Modal
                title="Add Video"
                visible={modalVisible}
                getContainer={false}
                onCancel={handleCancel}
                okText="Add"
                onOk={handleOk}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Category"
                        name="category_name"
                        rules={[{ required: true, message: 'Please select a category!' }]}
                    >
                        <Select placeholder="Select a category">
                            {
                                allCategories.length > 0 && allCategories.map((ct) => <Option key={ct.id} value={ct.name}>{ct.name}</Option>)
                            }

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
                        label="Video url"
                        name="url"
                        rules={[{ required: true, message: 'Please input the URL!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="Edit Video"
                visible={editModalVisible}
                getContainer={false}
                onCancel={handleCancel}
                okText="Save"
                onOk={handleEditOk}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Category"
                        name="category_name"
                        rules={[{ required: true, message: 'Please select a category!' }]}
                    >
                        <Select placeholder="Select a category">
                            {
                                allCategories.length > 0 && allCategories.map((ct) => <Option key={ct.id} value={ct.slug}>{ct.name}</Option>)
                            }


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
                        label="Video url"
                        name="url"
                        rules={[{ required: true, message: 'Please input the URL!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Videos;
