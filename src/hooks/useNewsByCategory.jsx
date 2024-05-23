import { useState, useEffect } from 'react';
import { callApi } from '../utils/functions';

const useNewsByCategory = (category = '') => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const res = await callApi('get', `/api/articles/list/${category}`);
                setData(res.data);
                setLoader(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoader(false);
            }
        };

        fetchData();

    }, [category]);

    return { data, loader };
};

export default useNewsByCategory;
