import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import Select from 'react-select';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { useParams } from "react-router-dom";
import SkeletonLoader from "../../../components/Utilites/SkeletonLoader";
import { useEffect, useState } from "react";
import { callApi } from "../../../utils/functions";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCategories from '../../../hooks/useCategories';

Quill.register('modules/imageResize', ImageResize);

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [loading, setLoading] = useState(false);
    const { categories, isLoading } = useCategories()




    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true)
            try {
                const res = await callApi('GET', `/api/articles/${id}`);

                setTitle(res.title);
                setAuthor(res.author);
                setContent(res.content);
                setSelectedCategories(res.categories.map(category => category.id));
                setSelectedImage(res.banner);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article:', error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);


    if (loading || isLoading) {
        return <SkeletonLoader />
    }

    const handleSubmit = async (e) => {
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
            const res = await callApi('POST', `/api/articles/${id}`, formData, {

                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res)
            if (res.author) {

                toast.success(' You have successfully updated a news', {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate(`/dashboard/success-post?title=${res.title}&slug=${res.slug}`);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };




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

    const modules = {
        imageResize: {
            parchment: Quill.import('parchment'),

        },
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', /* 'image' */],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
    };



    return (
        <div>
            <h4>Edit the article</h4>

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

                <div className="row">
                    <FormGroup className='col-md-7'>
                        <Label className='font-monospace fs-5 text-primary' for="banner">Banner:</Label>
                        <Input className='border-success-subtle' accept="image/*" name="banner" id="banner" type='file' onChange={(e) => setSelectedImage(e.target.files[0])} required />
                    </FormGroup>
                    <div className="col-md-5">
                        {selectedImage ? (
                            <img src={typeof selectedImage === 'string' ? selectedImage : URL.createObjectURL(selectedImage)} width={100} alt="" />
                        ) : (
                            <img src={selectedImage} width={100} alt="Default Banner" />
                        )}
                    </div>
                </div>


                <FormGroup className='bg-white px-2'>
                    <Label className='font-monospace fs-5 text-primary' for="content">Content:</Label>
                    <ReactQuill theme="snow"
                        style={{ height: '360px', paddingBottom: '61px' }}
                        value={content} onChange={setContent} modules={modules} />
                </FormGroup>

                <Button disabled={loading} color="primary" className='' type="submit">
                    Submit
                </Button>
            </Form>




        </div>
    );
};

export default EditPost;