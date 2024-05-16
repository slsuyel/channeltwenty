import { useQuery } from "react-query";
import { callApi } from "../utils/functions";

const useAllPages = () => {
    const { data: allPages = [], isLoading, isError, refetch } = useQuery('allPages', fetchAll);

    async function fetchAll() {
        try {
            const response = await callApi("GET", `/api/pages`);
            return response;
        } catch (error) {
            throw new Error('Error fetching all Social data');
        }
    }

    return { allPages, isLoading, isError, refetch };
};


export default useAllPages