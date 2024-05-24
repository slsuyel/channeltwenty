import Swal from "sweetalert2";
import useAllNews from "../../../hooks/useAllNews";
import { callApi } from "../../../utils/functions";
import SkeletonLoader from './../../../components/Utilites/SkeletonLoader';
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const AllNews = () => {
    const { allNews, isLoading, refetch } = useAllNews();

    const navigate = useNavigate()
    if (isLoading) {
        return <SkeletonLoader />;
    }



    const handleEdit = (id) => {
        // Handle edit action with the id
        navigate(`/dashboard/edit/${id}`)
    };

    const handleDelete = async (id) => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this news article!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const res = await callApi('DELETE', `/api/articles/${id}`);
                console.log(res);
                refetch()
                Swal.fire('Deleted!', 'The news article has been deleted.', 'success');
                // Swal.fire('Error!', '405 Method Not Allowed', 'error');
            } catch (error) {
                Swal.fire('Error!', 'Failed to delete the news article.', 'error');
            }
        }
    };

    const handleView = (s) => {
        navigate(`/news/${s}`)
    };

    return (
        <div className="container mt-5" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <Table striped bordered hover responsive className="">
                <thead>
                    <tr>
                        <th>Banner</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Categories</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allNews.map(news => (
                        <tr key={news.id}>
                            <td><img src={news.banner} alt={news.title} style={{ width: '100px' }} /></td>
                            <td>{news.title}</td>
                            <td>{news.author}</td>
                            <td>{news.date}</td>
                            <td>
                                {news.categories.map(category => (
                                    <span key={category.id}>{category.label},</span>
                                ))}
                            </td>
                            <td>
                                <DropdownButton id="dropdown-basic-button" title="Actions">
                                    <Dropdown.Item onClick={() => handleEdit(news.id)}>Edit</Dropdown.Item>

                                    <Dropdown.Item onClick={() => handleView(news.slug)}>View</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleDelete(news.id)}>Delete</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AllNews;
