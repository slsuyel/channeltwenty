/* eslint-disable react/prop-types */
const Paginate = ({ currentPage, totalPages, onPageChange }) => {
  console.log('Total pages:', totalPages);

  /* 
-----------
This page is okay
----------
*/

  const MAX_PAGES_VISIBLE = 5;
  const startPage = Math.max(
    1,
    currentPage - Math.floor(MAX_PAGES_VISIBLE / 2)
  );
  const endPage = Math.min(totalPages, startPage + MAX_PAGES_VISIBLE - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const handlePageChange = page => {
    onPageChange(page);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
