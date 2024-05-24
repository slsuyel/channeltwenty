
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner, Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import usePagesRole from '../../../hooks/usePagesRole';
import { callApi } from '../../../utils/functions';
import { message } from 'antd';

const SetPermission = () => {
    const { id } = useParams();
    const { permissions, isLoading, isError } = usePagesRole();
    const [checkedPermissions, setCheckedPermissions] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await callApi('post', `/api/get/permissions/${id}`);
                const permittedIds = res.map(d => d.id);
                const initialCheckedState = {};
                permittedIds.forEach(id => {
                    initialCheckedState[id] = true;
                });
                setCheckedPermissions(initialCheckedState);
            } catch (error) {
                console.error('Error fetching permissions:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleCheckboxChange = (e, permissionId) => {
        const { checked } = e.target;
        setCheckedPermissions((prev) => ({
            ...prev,
            [permissionId]: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedPermissionIds = Object.keys(checkedPermissions).filter((key) => checkedPermissions[key]);
        const res = await callApi('post', `/api/roles/${id}/permissions`, { permission_ids: selectedPermissionIds });
        if (res.message === 'Permissions added to role successfully') {
            message.success('Permissions added to role successfully');
            navigate('/dashboard/users/role');
        } else {
            message.error('Something went wrong');
        }
    };

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner color="primary" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <p className="text-danger">Error loading permissions. Please try again later.</p>
            </div>
        );
    }

    return (
        <Container>
            <h2 className="my-4">Set Permission for ID: {id}</h2>
            <Form onSubmit={handleSubmit}>
                {permissions.map((p) => (
                    <FormGroup check key={p.id} className="mb-2">
                        <Label check>
                            <Input
                                type="checkbox"
                                checked={checkedPermissions[p.id] || false}
                                onChange={(e) => handleCheckboxChange(e, p.id)}
                            /> {p.name}
                        </Label>
                    </FormGroup>
                ))}
                <Button type="submit" color="primary">Submit</Button>
            </Form>
        </Container>
    );
};

export default SetPermission;
