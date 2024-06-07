import React from 'react';
import useAllUsers from '../../../hooks/useAllUsers';
import { Table, Button } from 'react-bootstrap';
import { callApi } from '../../../utils/functions';
import { message, Modal } from 'antd';

const Users = () => {
  const { data, isLoading, refetch } = useAllUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleUserDelete = async id => {
    try {
      const res = await callApi('Delete', `/api/users/role/system/${id}`);
      if (res.status == 'success') {
        message.success('User Deleted');
        refetch();
      }
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const showDeleteConfirm = id => {
    Modal.confirm({
      title: 'Are you sure you want to delete this user?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleUserDelete(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>
                {/* <Button variant="primary" className="me-2">
                  Edit
                </Button> */}
                <Button
                  variant="danger"
                  onClick={() => showDeleteConfirm(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
