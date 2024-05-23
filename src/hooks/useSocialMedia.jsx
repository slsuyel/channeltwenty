import { useQuery } from "react-query";
import { callApi } from "../utils/functions";

const useSocialMedia = () => {
    const { data: allSocial = [], isLoading, isError, refetch } = useQuery('allSocial', fetchAllSocial);

    async function fetchAllSocial() {
        try {
            const response = await callApi("GET", `/api/social-links`);
            return response;
        } catch (error) {
            throw new Error('Error fetching all Social data');
        }
    }

    return { allSocial, isLoading, isError, refetch };
};


export default useSocialMedia;