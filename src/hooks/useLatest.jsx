import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';

const useLatest = () => {
    const { data: latestNews, isLoading, isError, refetch } = useQuery('', fetchlatestNews);

    async function fetchlatestNews() {
        try {
            const response = await callApi("GET", `/api/all/latest/articles`);
            return response;
        } catch (error) {
            throw new Error('Error fetching news data');
        }
    }

    return { latestNews, isLoading, isError, refetch };
};

export default useLatest;