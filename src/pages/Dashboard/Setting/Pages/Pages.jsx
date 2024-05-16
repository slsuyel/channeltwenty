// import { Button, Input, Modal, message } from 'antd';
// import React, { useState } from 'react';
// import ReactQuill, { Quill } from 'react-quill';
// import { callApi } from '../../../../utils/functions';
// import useAllPages from '../../../../hooks/useAllPages';
// const Pages = () => {
//     const { allPages, isLoading, refetch } = useAllPages()
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);
//     const modules = {
//         imageResize: {
//             parchment: Quill.import('parchment'),
//         },
//         toolbar: [
//             [{ 'header': '1' }, { 'font': [] }],
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//             ['bold', 'italic', 'underline'],
//             ['link', /* 'image' */],
//             [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
//             ['clean']
//         ],
//     };

//     const handlePost = async () => {
//         console.log(title, content);
//         const res = await callApi('post', '/api/pages', { title, content })
//         if (res.message == 'Page created successfully') {
//             message.success('Page created successfully')
//             setModalVisible(false);
//             refetch()
//         }
//         else message.error('Something went wrong')
//         setModalVisible(false);
//     }

//     const handleDelete = async (id) => {
//         Modal.confirm({
//             title: 'Confirm Delete',
//             content: 'Are you sure you want to delete this social link?',
//             okText: 'Yes',
//             cancelText: 'No',
//             onOk: async () => {
//                 const res = await callApi('DELETE', `/api/pages/${id}`);
//                 if (res.message === 'Page deleted successfully') {
//                     message.success('Page deleted successfully');
//                     refetch();
//                 } else {
//                     message.error('Failed to delete ');
//                 }
//             },
//         });
//     };





//     if (isLoading) {
//         return null
//     }



//     return (
//         <div>
//             <Button onClick={() => setModalVisible(true)}>Create Page</Button>
//             <Modal
//                 visible={modalVisible}
//                 onOk={handlePost}
//                 onCancel={() => {
//                     setModalVisible(false);
//                 }}
//             >

//                 <label htmlFor="">Page Title</label>
//                 <br />
//                 <Input
//                     className='w-100'
//                     placeholder="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label htmlFor="">Page Content</label>
//                 <br />

//                 <ReactQuill theme="snow"
//                     style={{ height: '360px', paddingBottom: '61px' }}
//                     value={content} onChange={setContent} modules={modules} />
//             </Modal>

//             <div className="table-responsive">
//                 <table className="table">
//                     <thead>
//                         <tr className='text-capitalize '>
//                             <th>title</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allPages.map((item) => (
//                             <tr key={item.id}>
//                                 <td>{item.title}</td>

//                                 <td>
//                                     <div className="d-flex gap-2">
//                                         <Button type="primary" danger
//                                             onClick={() => handleDelete(item.id)}
//                                         >
//                                             Delete
//                                         </Button>
//                                         <Button type="primary">
//                                             Edit
//                                         </Button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>



//         </div>
//     );
// };

// export default Pages;

import { Button, Input, Modal, message } from 'antd';
import React, { useState, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { callApi } from '../../../../utils/functions';
import useAllPages from '../../../../hooks/useAllPages';
import SkeletonLoader from '../../../../components/Utilites/SkeletonLoader';

const Pages = () => {
    const { allPages, isLoading, refetch } = useAllPages();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [editPageId, setEditPageId] = useState(null);

    useEffect(() => {
        if (editPageId !== null) {
            const editPage = allPages.find(page => page.id === editPageId);
            if (editPage) {
                setTitle(editPage.title);
                setContent(editPage.content);
            }
        }
    }, [editPageId, allPages]);

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

    const handlePost = async () => {
        if (editPageId !== null) {
            const res = await callApi('Post', `/api/pages/${editPageId}`, { title, content });

            if (res.message === 'Page updated successfully') {
                message.success('Page updated successfully');
                setEditPageId(null);
                refetch();
                setModalVisible(false)
            } else {
                message.error('Failed to update page');
            }
        } else {
            const res = await callApi('POST', '/api/pages', { title, content });
            if (res.message === 'Page created successfully') {
                message.success('Page created successfully');
                setModalVisible(false);
                refetch();
            } else {
                message.error('Failed to create page');
            }
        }
    };

    const handleDelete = async (id) => {
        Modal.confirm({
            title: 'Confirm Delete',
            content: 'Are you sure you want to delete this page?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: async () => {
                const res = await callApi('DELETE', `/api/pages/${id}`);
                if (res.message === 'Page deleted successfully') {
                    message.success('Page deleted successfully');
                    refetch();
                    setModalVisible(false)
                } else {
                    message.error('Failed to delete page');
                }
            },
        });
    };

    const handleEdit = (id) => {
        setEditPageId(id);
        setModalVisible(true);
    };

    if (isLoading) {
        return <SkeletonLoader />
    }

    return (
        <div>
            <Button onClick={() => {
                setEditPageId(null);
                setModalVisible(true);
            }}>Create Page</Button>
            <Modal
                visible={modalVisible}
                onOk={handlePost}
                onCancel={() => {
                    setModalVisible(false);
                    setEditPageId(null);
                    setTitle('');
                    setContent('');
                }}
            >
                <label htmlFor="">Page Title</label>
                <br />
                <Input
                    className='w-100'
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="">Page Content</label>
                <br />
                <ReactQuill
                    theme="snow"
                    style={{ height: '360px', paddingBottom: '61px' }}
                    value={content}
                    onChange={setContent}
                    modules={modules}
                />
            </Modal>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className='text-capitalize '>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPages.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
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
        </div>
    );
};

export default Pages;
