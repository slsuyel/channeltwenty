import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../../../utils/functions';
import { getVideosByCategory } from '../../../utils/getVideosByCategory';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import { extractVideoId } from '../../../utils/extractVideoId';

const Video = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoader(true);
        try {
            const res = await callApi('GET', '/api/video/all/list');
            setData(res);
            setLoader(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    if (loader) {
        return <SkeletonLoader />
    }

    const latest = getVideosByCategory(data, 'Latest')
    const news = getVideosByCategory(data, 'News')
    const popular = getVideosByCategory(data, 'Popular')

    console.log(latest);
    return (
        <div className='container-fluid'>
            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>Latest Video</h2>

                <div className='row w-100 mx-auto'>


                    {
                        latest.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200"
                                src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`}
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                        </div>)
                    }


                </div>
                <div>
                    <Link to='/video/Latest' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>Popular</h2>

                <div className='row w-100 mx-auto'>
                    {
                        popular.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>)
                    }
                </div>
                <div>
                    <Link to='/video/Popular' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>News</h2>

                <div className='row w-100 mx-auto'>
                    {/* <div className='col-md-4'>
                        <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div> */}
                    {
                        news.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>)
                    }

                </div>
                <div>
                    <Link to='/video/News' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

        </div>
    );
};

export default Video;