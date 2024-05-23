/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CrimeCard = ({ data }) => {
    return (
        <div className='col-md-6 row mx-auto'>

            <div className="mb-1 mx-auto  w-100">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        অপরাধ
                    </span>
                </h3>
            </div>

            <div className='col-md-6 '>

                {
                    data && data.slice(0, 3).map((news) => <div key={news.id} className=" position-relative">
                        <Link to={`/news/${news.slug}`} >

                            <div className="img-contain">
                                <img src={news.banner}
                                    alt="Zoomable Image"
                                />
                                <div className="overlay" />
                            </div>
                        </Link>
                        <div className="position-absolute title-text">
                            <h5 className="text-white">
                                {news.title}
                            </h5>

                        </div>
                    </div>)
                }


            </div>
            <div className='col-md-6 row'>
                {data.slice(2, 6).map((news, index) => (
                    <div
                        key={index}
                        className="align-items-center d-flex gap-2 newscard p-2 py-1  rounded-1"
                    >
                        <div className='w-50'>
                            <img
                                src={news.banner}
                                alt=""
                                className="img-fluid "
                                style={{ minWidth: '120px', maxWidth: '100%' }}
                            />
                        </div>
                        <div>
                            <Link to={`/news/${news.slug}`}
                                className="text-decoration-none text-dark">
                                <h6 className="fw-normal">
                                    {news.title.slice(0, 45)}...
                                </h6>
                                <p style={{ color: '#0004f4', fontSize: '14px' }} className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                    {news.date}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CrimeCard;