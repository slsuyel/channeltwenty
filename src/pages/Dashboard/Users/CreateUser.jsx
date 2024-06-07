import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { callApi } from '../../../utils/functions';
import useAllRole from '../../../hooks/useAllRole';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';

const CreateUser = () => {
  const { allRole, isLoading } = useAllRole();

  const onFinish = async values => {
    try {
      const result = await callApi('post', '/api/users/role/system', values);
      if (result) {
        return message.success('User Create successfully');
      }
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };
  if (isLoading) {
    return <SkeletonLoader />;
  }

  const roleOptions = allRole.map(role => ({
    value: role.id,
    label: role.name,
  }));

  return (
    <div>
      <h1>Create User</h1>
      <Form name="create_user" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[
            { required: true, message: 'Please input your mobile number!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role_id"
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          <Select options={roleOptions} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
