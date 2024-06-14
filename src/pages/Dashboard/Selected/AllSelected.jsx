import Swal from 'sweetalert2';
import useAllNews from '../../../hooks/useAllNews';
import { callApi, checkPermit } from '../../../utils/functions';
import SkeletonLoader from './../../../components/Utilites/SkeletonLoader';
import { Table, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useRoleCheck from '../../../routes/useRoleCheck';

const AllSelected = () => {
  const { allNews, isLoading, refetch } = useAllNews();
  const { role, loading } = useRoleCheck();

  console.log(allNews);

  const navigate = useNavigate();
  if (loading) {
    return <SkeletonLoader />;
  }
  const permissions = role.roles.permissions;

  const handleEdit = id => {
    // Handle edit action with the id
    navigate(`/dashboard/edit/${id}`);
  };

  const handleDelete = async date => {
    console.log(date);
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
        const res = await callApi(
          'DELETE',
          `/api/selected-article/delete-by-date?date=${date}`
        );
        console.log(res);
        refetch();
        Swal.fire('Deleted!', 'The news article has been deleted.', 'success');
        // Swal.fire('Error!', '405 Method Not Allowed', 'error');
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete the news article.', 'error');
      }
    }
  };

  const handleView = s => {
    navigate(`/news/${s}`);
  };

  return (
    <div
      className="container mt-5"
      style={{ maxHeight: '500px', overflowY: 'auto' }}
    >
      <Table striped bordered hover responsive className="">
        <thead>
          <tr>
            <th>Banner</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            allNews.map(news => (
              <tr key={news.id}>
                <td>
                  <img
                    src={news?.article?.banner}
                    alt={news?.article?.title}
                    style={{ width: '100px' }}
                  />
                </td>
                <td>{news?.article?.title}</td>
                <td>{news?.article?.author}</td>
                <td>{news.date}</td>

                <td>
                  <DropdownButton id="dropdown-basic-button" title="Actions">
                    {checkPermit(permissions, 'articles.update') ? (
                      <Dropdown.Item
                        onClick={() => handleEdit(news?.article?.id)}
                      >
                        Edit
                      </Dropdown.Item>
                    ) : null}
                    <Dropdown.Item
                      onClick={() => handleView(news?.article?.slug)}
                    >
                      View
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(news.date)}>
                      Delete
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllSelected;
