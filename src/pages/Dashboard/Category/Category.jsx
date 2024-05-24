import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import AddCategoryModal from "../Blogs/AddCategoryModal";
import useCategories from "../../../hooks/useCategories";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { callApi } from "../../../utils/functions";
import Swal from "sweetalert2";
import SkeletonLoader from "../../../components/Utilites/SkeletonLoader";

const Category = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const { categories, isLoading, refetch } = useCategories();

    const handleDelete = async (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this category!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await callApi('Delete', `/api/categories/${id}`);
                console.log(res);
                refetch()
                Swal.fire('Deleted!', 'Category has been deleted.', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Category deletion has been cancelled', 'info');
            }
        });
    };


    if (isLoading) {
        return <SkeletonLoader />
    }

    return (
        <div>
            <Button className='btn-sm ms-4' onClick={toggleModal}>New Category</Button>


            <Table striped className="mt-3">
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Slug</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.label}</td>
                            <td>{category.slug}</td>
                            <td>
                                <DropdownButton id="dropdown-basic-button" title="Actions">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleDelete(category.id)}>Delete</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <AddCategoryModal isOpen={isModalOpen} toggleModal={toggleModal} categories={categories} refetch={refetch} />
        </div>
    );
};

export default Category;
