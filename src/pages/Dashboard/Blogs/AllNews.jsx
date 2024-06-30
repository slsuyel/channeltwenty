import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import useAllNews from '../../../hooks/useAllNews';
import { callApi, checkPermit } from '../../../utils/functions';
import SkeletonLoader from './../../../components/Utilites/SkeletonLoader';
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useRoleCheck from '../../../routes/useRoleCheck';

import Paginate from '../../../components/ui/Paginate';

const AllNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { allNews, isLoading, isError, refetch, totalPages } =
    useAllNews(currentPage); // Destructure totalPages from useAllNews
  const { role, loading } = useRoleCheck();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when component re-renders
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  if (isLoading || loading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const permissions = role.roles.permissions;

  const handleEdit = id => {
    navigate(`/dashboard/edit/${id}`);
  };

  const handleDelete = async id => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this news article!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await callApi('DELETE', `/api/articles/${id}`);
        console.log(res);
        refetch();
        Swal.fire('Deleted!', 'The news article has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete the news article.', 'error');
      }
    }
  };

  const handleView = slug => {
    navigate(`/news/${slug}`);
  };

  return (
    <div className="container mt-5">
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
              <td>
                <img
                  src={news.banner}
                  alt={news.title}
                  style={{ width: '100px' }}
                />
              </td>
              <td>{news.title}</td>
              <td>{news.author}</td>
              <td>{news.date}</td>
              <td>
                {news.categories.length > 0 &&
                  news.categories.map(category => (
                    <span key={category.id}>{category.label},</span>
                  ))}
              </td>
              <td>
                <DropdownButton id="dropdown-basic-button" title="Actions">
                  {checkPermit(permissions, 'articles.update') && (
                    <Dropdown.Item onClick={() => handleEdit(news.id)}>
                      Edit
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item onClick={() => handleView(news.slug)}>
                    View
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDelete(news.id)}>
                    Delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AllNews;
