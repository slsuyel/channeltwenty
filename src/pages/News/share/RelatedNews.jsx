/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from '../../../utils/functions';

const RelatedNews = ({ slug }) => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await callApi('get', `/api/all/related/articles/${slug}?limit=5`);
                setNews(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    // Show loader when loading state is true
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='sticky-top' style={{ top: '117px', zIndex: '0' }}>
            <div className="mb-1 mx-auto">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        আরও সংবাদ
                    </span>
                </h3>
            </div>
            {news.map((newsItem, index) => (
                <div
                    key={index}
                    className="align-items-center d-flex gap-2 mb-3 newscard p-2 rounded-1"
                    style={{ marginBottom: 2 }}
                >
                    <div className=''>
                        <img
                            src={newsItem.banner}
                            alt=""
                            className="img-fluid mb-1"
                            style={{ minWidth: '150px', maxWidth: '150px' }}
                        />
                    </div>
                    <div>
                        <Link
                            className="text-decoration-none text-dark"
                            to={`/news/${newsItem.slug}`}
                        >
                            <h6 className="fw-bold">
                                {newsItem.title}
                            </h6>
                            <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i> {newsItem.date}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RelatedNews;
