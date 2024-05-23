/* eslint-disable react/no-unknown-property */
import React from 'react';

import { Link } from 'react-router-dom';

// import useNewsByCategory from '../../hooks/useNewsByCategory';
import useLatest from '../../hooks/useLatest';


const NewsTrigger = () => {
    const { latestNews, isLoading, } = useLatest()
    // const { data: latestNews, loader: isLoading } = useNewsByCategory('news')

    // console.log(latestNews);
    if (isLoading) {
        return null;
    }

    return (
        <div className="container-fluid">
            <div className="fs-5 py-1 row text-dark">
                <div className="col-md-12">
                    <div className="align-items-center d-flex justify-content-between">
                        <div
                            className="d-flex flex-row flex-grow-1 flex-fill justify-content-center   text-white px-1 news"
                        >
                            <span className="d-flex text-nowrap align-items-center bg-red" >&nbsp; সর্বশেষ সংবাদ
                                : </span>
                            <div className='arrow'></div>
                        </div>
                        <marquee behavior="scroll" direction="left">
                            {latestNews.map((news) => (
                                <React.Fragment key={news.id}>
                                    <Link to={`/news/${news.slug}`} className="text-dark mb-2 p-3 text-decoration-none">{news.title}</Link>
                                    <span className="red-dot"></span>
                                </React.Fragment>
                            ))}
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsTrigger;
