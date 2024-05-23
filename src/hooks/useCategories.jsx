import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';

const fetchCategories = async () => {
    const response = await callApi("GET", `/api/categories`);
    return response;
};

const useCategories = () => {
    const { data: categories, isLoading, refetch } = useQuery('categories', fetchCategories);

    return { categories, isLoading, refetch };
};

export default useCategories;
