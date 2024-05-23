import React, { useState, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);
import Select from 'react-select';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { callApi } from '../../../utils/functions';
import useCategories from '../../../hooks/useCategories';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categories, isLoading } = useCategories()

    const handleChange = (html) => {
        console.log(html);
        setContent(html);
    }
    const modules = useMemo(() => ({
        imageResize: {
            parchment: Quill.import('parchment'),
        },
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
        imageUploader: {
            upload: (file) => {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append("image", file);
                    fetch(
                        "https://api.imgbb.com/1/upload?key=334ecea9ec1213784db5cb9a14dac265",
                        {
                            method: "POST",
                            body: formData
                        }
                    )
                        .then(response => response.json())
                        .then(result => {
                            if (result.data && result.data.url) {
                                resolve(result.data.url);
                            } else {
                                reject("Upload failed");
                            }
                        })
                        .catch(error => {
                            reject("Upload failed", error);
                        });
                });
            }
        }
    }), []);


    // console.log(selectedCategories);
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('content', content);
        formData.append('banner', selectedImage);
        selectedCategories.forEach(category => {
            formData.append('categories[]', category);
        });

        try {
            const res = await callApi('post', '/api/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.author) {
                setLoading(false)
                toast.success(' You have successfully created a news', {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(`/dashboard/success-post?title=${res.title}&slug=${res.slug}`);

            }


        } catch (error) {
            setLoading(false)
            console.error('Error:', error);
        }
        setLoading(false)
    };


    if (isLoading) {
        return <SkeletonLoader />
    }


    const categoryOptions = categories.reduce((acc, category) => {

        acc.push({
            value: category.id,
            label: category.label,
            isCategory: true
        });


        if (category.subcategories) {
            category.subcategories.forEach(subcategory => {
                acc.push({
                    value: subcategory.id, // Use ID instead of name
                    label: subcategory.label,
                    isCategory: false // Indicates it's a subcategory
                });
            });
        }
        return acc;
    }, []);


    const handleCategoryChange = (selectedOptions) => {
        const selectedCategoryIds = selectedOptions
            .filter(option => option.isCategory)
            .map(option => option.value);
        setSelectedCategories(selectedCategoryIds);
    };



    return (

        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label className='font-monospace fs-5 text-primary' for="title">Title:</Label>
                    <Input className='border-success-subtle' type="text" name="title" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>

                <div className="row ">
                    <FormGroup className='col-md-6'>
                        <Label className='font-monospace fs-5 text-primary' for="author">Author:</Label>
                        <Input className='border-success-subtle' type="text" name="author" id="author" required value={author} onChange={(e) => setAuthor(e.target.value)} />

                    </FormGroup>

                    <FormGroup className='col-md-6'>
                        <Label className='font-monospace fs-5 text-primary' for="categories">Categories:



                        </Label>

                        <Select
                            options={categoryOptions}
                            isMulti
                            value={selectedCategories.map(id => ({ value: id, label: id, isCategory: true }))}
                            onChange={handleCategoryChange}
                            required
                        />
                    </FormGroup>
                </div>

                <FormGroup>
                    <Label className='font-monospace fs-5 text-primary' for="banner">Banner:</Label>
                    <Input className='border-success-subtle' accept="image/*" name="banner" id="banner" type='file' onChange={(e) => setSelectedImage(e.target.files[0])} required />
                </FormGroup>

                <FormGroup className='bg-white px-2'>
                    <Label className='font-monospace fs-5 text-primary' for="content">Content:</Label>
                    <ReactQuill theme="snow"
                        style={{ height: '80vh', paddingBottom: '61px' }}
                        value={content} onChange={handleChange} modules={modules} />
                </FormGroup>

                <Button disabled={loading} color="primary" className='' type="submit">
                    Submit
                </Button>
            </Form>



        </>


    );
};

export default AddBlog;
