// import React, { useState, useEffect } from 'react';
// import { callApi } from '../utils/functions';
// import { useQuery } from "react-query";
// const useLiveVideoUrl = () => {
//     const [url, setUrl] = useState(null);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         setLoading(true)
//         const fetchData = async () => {
//             try {
//                 const response = await callApi('get', '/api/live_video/last');
//                 console.log(response);
//                 setUrl(response);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching live video URL:', error);
//                 setLoading(false);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();


//         return () => {

//         };
//     }, []);

//     return { url, loading };
// };

// export default useLiveVideoUrl;

import React from 'react';
import { callApi } from '../utils/functions';
import { useQuery } from 'react-query';

const useLiveVideoUrl = () => {
    const { data: url = {}, loading, isError, refetch } = useQuery('url', fetchAll);

    async function fetchAll() {
        try {
            const response = await callApi("GET", `/api/live_video/last`);
            return response;
        } catch (error) {
            throw new Error('Error fetching ');
        }
    }

    return { url, loading, isError, refetch };
};
export default useLiveVideoUrl;