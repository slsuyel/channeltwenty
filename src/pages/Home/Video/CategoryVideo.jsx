import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../../../utils/functions';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import { extractVideoId } from '../../../utils/extractVideoId';

const CategoryVideo = () => {
    const { category } = useParams();

    console.log(category);

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoader(true);
        try {
            const res = await callApi('GET', `/api/videos/list/${category}`);
            setData(res.data);
            setLoader(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (loader) {
        return <SkeletonLoader />
    }


    return (
        <div>
            <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>{category ? category : ''}

            </h2>

            <div className='row w-100 mx-auto'>
                {
                    data.map((v) => <div key={v.id} className='col-md-4 my-2'>
                        <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>)
                }




            </div>


        </div>

    );
};

export default CategoryVideo;