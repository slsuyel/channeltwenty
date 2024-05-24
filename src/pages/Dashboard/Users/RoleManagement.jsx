
import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import { Modal, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { callApi } from "../../../utils/functions";
import Swal from "sweetalert2";
import SkeletonLoader from "../../../components/Utilites/SkeletonLoader";

import useAllRole from "../../../hooks/useAllRole";
import { Link } from 'react-router-dom';

const RoleManagement = () => {
    const { allRole, isLoading, refetch } = useAllRole();
    const [showModal, setShowModal] = useState(false);
    const [newRole, setNewRole] = useState({ name: '', description: '' });

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRole({ ...newRole, [name]: value });
    };

    const handleCreateRole = async () => {
        const res = await callApi('Post', '/api/roles', newRole);
        if (res.description) {
            Swal.fire('Success!', 'Role has been created.', 'success');
            refetch();
            handleCloseModal();
        } else {
            Swal.fire('Error!', 'There was an issue creating the role.', 'error');
        }
    };

    const handleEdit = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this role!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await callApi('Delete', `/api/roles/${id}`);
                if (res.success) {
                    Swal.fire('Deleted!', 'Role has been deleted.', 'success');
                    refetch();
                } else {
                    Swal.fire('Error!', 'There was an issue deleting the role.', 'error');
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Role deletion has been cancelled', 'info');
            }
        });
    };

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div>
            <Button color="primary" onClick={handleShowModal}>Create New Role</Button>

            <Table striped className="mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allRole.map(role => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{role.description}</td>
                            <td>
                                <DropdownButton id="dropdown-basic-button" title="Actions">


                                    <Link className='text-decoration-none ps-2' to={`/dashboard/users/role/${role.id}`}> Set Permission</Link>




                                    {/* <Dropdown.Item onClick={() => handleEdit(role.id)}>Edit</Dropdown.Item> */}


                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formRoleName">
                            <Form.Label>Role Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newRole.name}
                                onChange={handleInputChange}
                                placeholder="Enter role name"
                            />
                        </Form.Group>
                        <Form.Group controlId="formRoleDescription">
                            <Form.Label>Role Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={newRole.description}
                                onChange={handleInputChange}
                                placeholder="Enter role description"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleCreateRole}>Create Role</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RoleManagement;
