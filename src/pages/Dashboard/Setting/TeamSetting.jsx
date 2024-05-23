import React from 'react';
import { Typography, Form, Input, Button, Divider } from 'antd';

const { Title, } = Typography;
const TeamSetting = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };


    return (
        <div className='col-md-6 mx-auto '>
            <Title level={2}>Settings</Title>
            <Divider />
            <Form
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="প্রধান উপদেষ্টা"
                    name="chiefAdvisor"
                    rules={[{ required: true, message: 'Please enter the chief advisor!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="সম্পাদক"
                    name="editor"
                    rules={[{ required: true, message: 'Please enter the editor!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="প্রকাশক"
                    name="publisher"
                    rules={[{ required: true, message: 'Please enter the publisher!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TeamSetting;