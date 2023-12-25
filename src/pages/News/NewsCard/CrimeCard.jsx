import React from 'react';
import { Link } from 'react-router-dom';
const newsItems = [
    {
        imageSrc: 'https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png',
        postId: '64ece9cfe8d4b0e8bb55f1c6',
        title: 'যুক্তরাষ্ট্রের কাছ থেকে ইসরায়েলের মতো নিরাপ',
    },
    {
        imageSrc: 'https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png',
        postId: '64ece9cfe8d4b0e8bb55f1c6',
        title: 'যুক্তরাষ্ট্রের কাছ থেকে ইসরায়েলের মতো নিরাপ',
    },
    {
        imageSrc: 'https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png',
        postId: '64ece9cfe8d4b0e8bb55f1c6',
        title: 'যুক্তরাষ্ট্রের কাছ থেকে ইসরায়েলের মতো নিরাপ',
    },
    {
        imageSrc: 'https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png',
        postId: '64ece9cfe8d4b0e8bb55f1c6',
        title: 'যুক্তরাষ্ট্রের কাছ থেকে ইসরায়েলের মতো নিরাপ',
    },

];
const CrimeCard = () => {
    return (
        <div className='col-md-6 row'>

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

            <div className='col-md-6'>

                <div className=" position-relative">
                    <Link to='/news/12' >

                        <div className="img-contain">
                            <img
                                src="https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png"
                                alt="Zoomable Image"
                            />
                            <div className="overlay" />
                        </div>
                    </Link>
                    <div className="position-absolute title-text">

                        <a
                            className="text-decoration-none text-white "
                            href="/posts/64ecf1ddc4cc5ecd11e30627"
                        >

                            <h5 className="">
                                কনটেইনার টার্মিনাল নির্মাণে মার্সকের প্রস্তাব বিবেচনা করবে সরকার
                            </h5>
                        </a>
                    </div>
                </div>
                <div className=" position-relative">
                    <Link to='/news/12' >

                        <div className="img-contain">
                            <img
                                src="https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png"
                                alt="Zoomable Image"
                            />
                            <div className="overlay" />
                        </div>
                    </Link>
                    <div className="position-absolute title-text">

                        <Link to='/news/12' className="text-decoration-none text-white " >

                            <h5 className="">
                                কনটেইনার টার্মিনাল নির্মাণে মার্সকের প্রস্তাব বিবেচনা করবে সরকার
                            </h5>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='col-md-6 row'>
                {newsItems.map((newsItem, index) => (
                    <div
                        key={index}
                        className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1"
                        style={{ marginBottom: 2 }}
                    >
                        <div>
                            <img
                                src={newsItem.imageSrc}
                                alt=""
                                className="img-fluid mb-1"
                                width="180px"
                            />
                        </div>
                        <div>
                            <Link to='/news/12'
                                className="text-decoration-none text-dark">
                                <h6 className="fw-normal">
                                    {newsItem.title}
                                </h6>
                                <p style={{ color: '#0004f4' }} className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                    ডিসেম্বর ২৪, ২০২৩</p>

                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CrimeCard;