import { useQuery } from "react-query";
import { callApi } from "../utils/functions";

const useAllAdvertise = () => {
    const { data: allAdd = [], isLoading, isError, refetch } = useQuery('allAdd', fetchAll);

    async function fetchAll() {
        try {
            const response = await callApi("GET", `/api/advertisements`);
            return response;
        } catch (error) {
            throw new Error('Error fetching all Social data');
        }
    }

    return { allAdd, isLoading, isError, refetch };
};


export default useAllAdvertise; 