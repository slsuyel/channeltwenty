/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarCard = ({ tittle, data }) => {

    return (
        <div className='col-md-3'>
            <div className="mb-1 mx-auto">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        {tittle}
                    </span>
                </h3>
            </div>
            {data?.slice(0, 5).map((newsItem, index) => (
                <div
                    key={index}
                    className="align-items-center d-flex gap-2 mb-3 newscard p-2 rounded-1"

                >
                    <div>
                        <img
                            src={newsItem.banner}
                            alt=""
                            className="img-fluid mb-1 rounded-1"
                            style={{ minWidth: '120px', maxWidth: '120px' }}
                        />
                    </div>
                    <div>
                        {/* Replace <a> with <Link> */}
                        <Link
                            className="text-decoration-none text-dark"
                            to={`/news/${newsItem.slug}`}
                        >
                            <h6 className="fw-bold">
                                {newsItem.title}
                            </h6>
                            {/* <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i> {newsItem.date}</p> */}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SidebarCard;