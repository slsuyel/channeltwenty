import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';

const fetchAllRole = async () => {
    const response = await callApi("GET", `/api/roles`);
    return response;
};

const useAllRole = () => {
    const { data: allRole, isLoading, refetch } = useQuery('allRole', fetchAllRole);

    return { allRole, isLoading, refetch };
};

export default useAllRole;
