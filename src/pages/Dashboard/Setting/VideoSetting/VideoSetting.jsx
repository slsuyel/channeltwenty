import { Button, Modal, Form, Input, message } from 'antd';
import { useState, useEffect } from "react";
import { callApi } from '../../../../utils/functions';
import LiveVideo from './LiveVideo';

const VideoSetting = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [editingItemId, setEditingItemId] = useState(null);
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        try {
            const res = await callApi('get', '/api/video-categories');
            setCategories(res);

        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const res = await callApi(
                'post',
                editingItemId ? `/api/video-categories/${editingItemId}` : '/api/video-categories',
                values
            );

            if (res.name) {
                message.success('Category created successfully');
                setModalVisible(false)
                setEditingItemId(null)
            }
            else if (res.message == 'Video category updated successfully') {
                message.success('Video category updated successfully')
                setEditingItemId(null)
                setModalVisible(false)
            }
            form.resetFields();
            setModalVisible(false);
            fetchCategories();
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handleEdit = (id) => {
        const selectedItem = categories.find((item) => item.id === id);
        if (selectedItem) {
            setEditingItemId(selectedItem.id);
            setModalVisible(true);
        }
    };

    const handleDelete = async (id) => {
        Modal.confirm({
            title: 'Confirm Delete',
            content: 'Are you sure you want to delete this ?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: async () => {
                const res = await callApi('DELETE', `/api/video-categories/${id}`);
                if (res.message === 'Video category deleted successfully') {
                    message.success('Video category deleted successfully');
                    fetchCategories()
                } else {
                    message.error('Failed to delete ');
                }
            },
        });
    };


    return (
        <div>
            <Button type="primary" onClick={showModal} style={{ marginBottom: '20px' }}>
                <i className="fa-solid fa-video me-2"></i> Add Video Category
            </Button>



            <Modal
                title="Add category"
                visible={modalVisible}
                onCancel={handleCancel}
                okText="Add"
                onOk={handleOk}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Category Name"
                        name="name"
                        rules={[{ required: true, message: 'Category Name is required' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <div className='row'>
                <div className="table-responsive col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {categories.length > 0 && categories.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>

                                    <td>
                                        <div className="d-flex gap-2">
                                            <Button type="primary" danger onClick={() => handleDelete(item.id)}>
                                                Delete
                                            </Button>
                                            <Button type="primary" onClick={() => handleEdit(item.id)}>
                                                Edit
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-6">
                    <LiveVideo />


                </div>

            </div>

        </div>
    );
};

export default VideoSetting;
