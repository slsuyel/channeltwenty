/* eslint-disable react/no-unknown-property */
import React from 'react';
import useAllNews from './../../hooks/useAllNews';
import { Link } from 'react-router-dom';

const NewsTrigger = () => {
    const { allNews, isLoading } = useAllNews();

    if (isLoading) {
        return null;
    }

    return (
        <div className="container-fluid">
            <div className="fs-5 py-1 row text-dark">
                <div className="col-md-12">
                    <div className="align-items-center d-flex justify-content-between">
                        <div className="me-3 d-flex flex-fill flex-grow-1 flex-row justify-content-center nav-item-color primary-bg text-nowrap">
                            <span className="px-3 text-white">&nbsp;সর্বশেষ সংবাদ</span>
                        </div>
                        <marquee behavior="scroll" direction="left">
                            {allNews.map((news) => (
                                <React.Fragment key={news.id}>
                                    <Link to={`/news/${news.id}`} className="text-dark mb-2 p-3 text-decoration-none">{news.title}</Link>
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
