/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { callApi } from '../../../utils/functions';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddCategoryModal = ({ isOpen, toggleModal, categories, refetch }) => {

    const [categoryName, setCategoryName] = useState('');
    const [slug, setSlug] = useState('');
    const [parentCategory, setParentCategory] = useState('');
    const [isSubcategory, setIsSubcategory] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        if (isSubcategory) {
            console.log(parentCategory, categoryName, slug);
        } else {
            console.log(categoryName, slug);
        }
        const data = {
            label: categoryName,
            slug,
            parent_id: parentCategory
        }

        const res = await callApi('post', '/api/categories', data)
        console.log(res);
        setCategoryName('');
        setSlug('');
        setParentCategory('');
        setIsSubcategory(false);
        toggleModal();
        toast.success("Category added successfully!");
        refetch()
        setIsLoading(false)
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Add New Category</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label className='mb-0 text-secondary font-monospace text-sm' for="categoryName">Category Name:</Label>
                        <Input type="text" name="categoryName" id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label className='mb-0 text-secondary font-monospace text-sm' for="slug">Slug:</Label>
                        <Input type="text" name="slug" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
                    </FormGroup>
                    <FormGroup check>
                        <Label className='mb-0 text-secondary font-monospace text-sm' check>
                            <Input type="checkbox" checked={isSubcategory} onChange={() => setIsSubcategory(!isSubcategory)} />{' '}
                            Create as Subcategory
                        </Label>
                    </FormGroup>
                    {isSubcategory && (
                        <FormGroup>
                            <Label className='mb-0 text-secondary font-monospace text-sm' for="parentCategory">Parent Category:</Label>
                            <Input type="select" name="parentCategory" id="parentCategory" value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
                                <option value="">Select Parent Category</option>
                                {categories.map(category => (
                                    <option key={category.name} value={category.id}>{category.label}</option>
                                ))}
                            </Input>
                        </FormGroup>
                    )}
                    <div className='text-end'>
                        <Button disabled={isLoading} color="primary" type="submit">
                            {isLoading ? <Spinner animation="border" role="status" /> : 'Add'}

                        </Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default AddCategoryModal;
