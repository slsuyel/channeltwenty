import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';

const fetchCategories = async (type = 'backend') => {
  const response = await callApi('GET', `/api/categories?type=${type}`);
  return response;
};

const useCategories = type => {
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery('categories', () => fetchCategories(type));

  return { categories, isLoading, refetch };
};

export default useCategories;
