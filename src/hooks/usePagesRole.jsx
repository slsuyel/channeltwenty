import { useQuery } from "react-query";
import { callApi } from "../utils/functions";

const usePagesRole = () => {
    const { data: permissions = [], isLoading, isError, refetch } = useQuery('permissions', fetchAll);

    async function fetchAll() {
        try {
            const response = await callApi("GET", `/api/permissions`);
            return response;
        } catch (error) {
            throw new Error('Error fetching all Social data');
        }
    }

    return { permissions, isLoading, isError, refetch };
};


export default usePagesRole