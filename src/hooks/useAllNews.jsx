// import React, { useState, useEffect } from 'react';
// import { callApi } from '../utils/functions';

// const useAllNews = () => {
//     const [allNews, setAllNews] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchAllNews = async () => {
//             try {
//                 const response = await callApi("GET", `/api/articles`);
//                 setAllNews(response);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching news data:', error);
//                 setIsLoading(false);
//             }
//         };
//         fetchAllNews();
//     }, []);

//     return { allNews, isLoading };
// };

// export default useAllNews;


import { useQuery } from 'react-query';
import { callApi } from '../utils/functions';

const useAllNews = () => {
    const { data: allNews = [], isLoading, isError, refetch } = useQuery('allNews', fetchAllNews);

    async function fetchAllNews() {
        try {
            const response = await callApi("GET", `/api/articles`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching news data');
        }
    }

    return { allNews, isLoading, isError, refetch };
};

export default useAllNews;
