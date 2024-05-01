import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../../../utils/functions';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import { getVideosByCategory } from '../../../utils/getVideosByCategory';
import { extractVideoId } from '../../../utils/extractVideoId';

const Program = () => {

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

    const documentary = getVideosByCategory(data, 'Documentary')
    const adda = getVideosByCategory(data, 'আড্ডায় আড্ডায় পরামর্শ')
    const ganAdda = getVideosByCategory(data, 'গানে গানে আড্ডা')
    const uddokta = getVideosByCategory(data, 'উদ্যোক্তা গল্প')

    console.log(data);


    return (
        <div className='container-fluid'>
            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>Documentary</h2>

                <div className='row w-100 mx-auto'>
                    {
                        documentary.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>)
                    }
                </div>
                <div>
                    <Link to='/program/Documentary' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>আড্ডায় আড্ডায় পরামর্শ</h2>

                <div className='row w-100 mx-auto'>
                    {
                        adda.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>)
                    }
                </div>
                <div>
                    <Link to='/program/আড্ডায় আড্ডায় পরামর্শ' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>গানে গানে আড্ডা</h2>

                <div className='row w-100 mx-auto'>
                    {
                        ganAdda.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>)
                    }
                </div>
                <div>
                    <Link to='/program/গানে গানে আড্ডা' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

            <div>
                <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>উদ্যোক্তা গল্প</h2>

                <div className='row w-100 mx-auto'>
                    {
                        uddokta.map((v) => <div key={v.id} className='col-md-4'>
                            <iframe className='rounded rounded-4 w-100' width="380" height="200" src={`https://www.youtube.com/embed/${extractVideoId(v.url)}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>)
                    }
                </div>
                <div>
                    <Link to='/program/উদ্যোক্তা গল্প' className='text-dark text-decoration-none text-end'>   <h4>See More . . .</h4></Link>
                </div>

            </div>

        </div>
    );
};

export default Program;