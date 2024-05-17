import { useQuery } from "react-query";
import { callApi } from "../utils/functions";

const useAllVideoCategories = () => {
    const { data: allCategories = [], isLoading, isError, refetch } = useQuery('allCategories', fetchAll);

    async function fetchAll() {
        try {
            const response = await callApi("GET", `/api/video-categories`);
            return response;
        } catch (error) {
            throw new Error('Error fetching all Social data');
        }
    }

    return { allCategories, isLoading, isError, refetch };
};


export default useAllVideoCategories 