import React from 'react';
import { Link } from 'react-router-dom';
import useNewsByCategory from '../../../hooks/useNewsByCategory';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';

const SportsNews = () => {

    const { data, loader } = useNewsByCategory('sports');

    if (loader) {
        return <SkeletonLoader />
    }



    return (
        <div className='col-md-6 row mx-auto '>
            <div className="mb-1 ">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        খেলাধুলা
                    </span>
                </h3>
            </div>


            {
                data.slice(0, 6).map((news) => <div key={news.id} className='col-md-4 mx-auto mb-2'>
                    <div>
                        <img src={news.banner} alt="" className='img-fluid'
                        />
                        <Link to={`/news/${news.slug}`} className='text-decoration-none text-dark mb-1'> <h5 className='news-title-national mt-2 '>{news.title}</h5></Link>
                        <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i> {news.date}</p>
                    </div>
                </div>)
            }




        </div>
    );
};

export default SportsNews;