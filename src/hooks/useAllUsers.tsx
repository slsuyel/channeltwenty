import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';

const fetchData = async () => {
  const response = await callApi('GET', `/api/users/role/system`);
  return response;
};

const useAllUsers = () => {
  const {
    data: data,
    isLoading,
    refetch,
  } = useQuery('data', () => fetchData());

  return { data, isLoading, refetch };
};

export default useAllUsers;
