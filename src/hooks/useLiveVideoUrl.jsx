
import { useState } from 'react';
import { callApi } from '../utils/functions';
import { useQuery } from 'react-query';

const useLiveVideoUrl = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { data: url = {}, isError, refetch } = useQuery('url', fetchAll);

    async function fetchAll() {
        setIsLoading(true)
        try {
            const response = await callApi("GET", `/api/live_video/last`);
            setIsLoading(false)
            return response;
        } catch (error) {
            setIsLoading(false)
            throw new Error('Error fetching ');
        }
    }
    return { url, isLoading, isError, refetch };
};
export default useLiveVideoUrl;
