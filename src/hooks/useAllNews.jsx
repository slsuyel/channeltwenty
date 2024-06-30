import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const useAllNews = (page = 1) => {
  const location = useLocation();
  const [totalPages, setTotalPages] = useState(0);
  const url =
    location.pathname === '/dashboard/selected/all'
      ? `/api/selected-articles?paginate=1&page=${page}`
      : `/api/articles?paginate=15&page=${page}`;

  const {
    data: allNews = [],
    isLoading,
    isError,
    refetch,
  } = useQuery(['allNews', page], fetchAllNews);

  async function fetchAllNews() {
    try {
      const response = await callApi('GET', url);

      setTotalPages(response.meta.last_page);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching news data');
    }
  }

  return { allNews, isLoading, isError, totalPages, refetch };
};

export default useAllNews;
