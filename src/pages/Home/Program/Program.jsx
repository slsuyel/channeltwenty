import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../../../utils/functions';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import { getVideosByCategory } from '../../../utils/getVideosByCategory';
import { extractVideoId } from '../../../utils/extractVideoId';
import useAllVideoCategories from '../../../hooks/useAllVideoCategories';

const Program = () => {
    const { allCategories, isLoading } = useAllVideoCategories();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchData = async () => {
        setLoader(true);
        try {
            const res = await callApi('GET', '/api/video/all/list');
            setData(res);
            setLoader(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoader(false); // Ensure the loader is turned off in case of an error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loader || isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className='container-fluid'>
            {allCategories.map((ct) => (
                <div key={ct.name}>
                    <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>{ct.name}</h2>
                    <div className='row w-100 mx-auto'>
                        {getVideosByCategory(data, ct.name).map((v) => (
                            <div key={v.id} className='col-md-4'>
                                <iframe
                                    className='rounded rounded-4 w-100'
                                    width='380'
                                    height='200'
                                    src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`}
                                    title='YouTube video player'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link to={`/program/${ct.name}`} className='text-dark text-decoration-none text-end'>
                            <h4>See More . . .</h4>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Program;
