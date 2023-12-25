/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Col6Card = ({ tittle }) => {
    return (
        <div className='col-md-6'>

            <div className="mb-1 mx-auto  w-100">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        {tittle ? tittle : 'Not Found'}
                    </span>
                </h3>
            </div>

            <div className='row mx-auto w-100'>
                <div className="col-md-6 p-0">
                    <a href="" className='text-decoration-none '>
                        <div className="img-contain rounded-1">
                            <img
                                src="https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png"
                                alt="Zoomable Image"
                            />

                        </div>

                        <div className="">

                            <h2 className="fs-4 fw-bold lh-1 mb-0 text-dark">রাজশাহী-২ আসনে পরিবর্তন চায় নগরবাসী- অধ্যক্ষ শফিকুর রহমান বাদশা</h2>
                            <p style={{ color: "#243ae2" }} className='mb-0'> ডিসেম্বর ২৪, ২০২৩</p>

                            <p className='fs-6 mb-0 text-secondary'>  নিজস্ব প্রতিনিধি আসন্ন দ্বাদশ জাতীয় সংসদ নির্বাচনে রাজশাহী-২ সদর আসনে আলোচনার শীর্ষে থাকা আওয়ামী লীগের...</p>
                        </div>
                    </a>


                </div>

                <div className='col-md-6 mx-auto row'>
                    <div className='col-md-6'>
                        <Link to='/news/12' className='text-decoration-none '>
                            <img src="https://www.channeltwenty.com/wp-content/uploads/2023/12/CH-NEWS-24-12-23-11-480x320.jpg" alt="" className='img-fluid' />
                            <h6 className='fw-bold mb-0 mt-1 text-dark'>  হাতিয়ায় নৌকা প্রতীক প্রার্থীর উঠান বৈঠক</h6></Link>
                    </div>
                    <div className='col-md-6'>
                        <Link to='/news/12' className='text-decoration-none '>
                            <img src="https://www.channeltwenty.com/wp-content/uploads/2023/12/CH-NEWS-24-12-23-11-480x320.jpg" alt="" className='img-fluid' />
                            <h6 className='fw-bold mb-0 mt-1 text-dark'>  হাতিয়ায় নৌকা প্রতীক প্রার্থীর উঠান বৈঠক</h6></Link>
                    </div>
                    <div className='col-md-6'>
                        <Link to='/news/12' className='text-decoration-none '>
                            <img src="https://www.channeltwenty.com/wp-content/uploads/2023/12/CH-NEWS-24-12-23-11-480x320.jpg" alt="" className='img-fluid' />
                            <h6 className='fw-bold mb-0 mt-1 text-dark'>  হাতিয়ায় নৌকা প্রতীক প্রার্থীর উঠান বৈঠক</h6></Link>
                    </div>
                    <div className='col-md-6'>
                        <Link to='/news/12' className='text-decoration-none '>
                            <img src="https://www.channeltwenty.com/wp-content/uploads/2023/12/CH-NEWS-24-12-23-11-480x320.jpg" alt="" className='img-fluid' />
                            <h6 className='fw-bold mb-0 mt-1 text-dark'>  হাতিয়ায় নৌকা প্রতীক প্রার্থীর উঠান বৈঠক</h6></Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Col6Card;