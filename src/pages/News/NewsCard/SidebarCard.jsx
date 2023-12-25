/* eslint-disable react/prop-types */
import React from 'react';
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

    {
        imageSrc: 'https://newsnow-server.vercel.app/uploaded-images/1693248676465-file_1693233299.png',
        postId: '64ece9cfe8d4b0e8bb55f1c6',
        title: 'যুক্তরাষ্ট্রের কাছ থেকে ইসরায়েলের মতো নিরাপ',
    },

];
const SidebarCard = ({ tittle }) => {
    return (
        <div className='col-md-3'>
            <div className="mb-1 mx-auto ">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        {tittle}
                    </span>
                </h3>
            </div>
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
                        <a
                            className="text-decoration-none text-dark"
                            href={`/posts/${newsItem.postId}`}
                        >
                            <h6 className="fw-bold">
                                {newsItem.title}
                            </h6>
                            <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i> ডিসেম্বর ২৪, ২০২৩</p>
                        </a>

                    </div>
                </div>
            ))}
        </div>

    );
};

export default SidebarCard;