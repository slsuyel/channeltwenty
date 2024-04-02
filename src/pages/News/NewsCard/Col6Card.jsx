/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Col6Card = ({ title, data }) => {


    // console.log(data);

    return (
        <div className='col-md-6'>

            <div className="mb-1 mx-auto  w-100">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        {title ? title : 'Not Found'}
                    </span>
                </h3>
            </div>

            <div className='row mx-auto w-100'>
                <div className="col-md-6 p-0">
                    <Link to={`/news/${data[0]?.slug}`} className='text-decoration-none '>
                        <div className="img-contain rounded-1">
                            <img
                                src={data[0]?.banner}
                                alt="Zoomable Image"
                            />

                        </div>

                        <div className="">

                            <h2 className="fs-4 fw-bold lh-1 mb-0 text-dark">

                                {data[0]?.title}

                            </h2>
                            <p style={{ color: "#243ae2" }} className='mb-0'>   {data[0]?.date}</p>

                            {/* <p className='fs-6 mb-0 text-secondary'>  নিজস্ব প্রতিনিধি আসন্ন দ্বাদশ জাতীয় সংসদ নির্বাচনে রাজশাহী-২ সদর আসনে আলোচনার শীর্ষে থাকা আওয়ামী লীগের নিজস্ব প্রতিনিধি আসন্ন দ্বাদশ জাতীয় সংসদ নির্বাচনে রাজশাহী-২ সদর আসনে আলোচনার শীর্ষে থাকা আওয়ামী লীগের...</p> */}

                            <div
                                className="fs-6 mb-0 text-secondary"
                                dangerouslySetInnerHTML={{
                                    __html: `<p class="d-inline">
                                    ${data[0]?.content}</p>`,
                                }}
                            />

                        </div>
                    </Link>


                </div>

                <div className='col-md-6 mx-auto row'>

                    {
                        data.slice(1, 7).map((news) => <div key={news.id} className='col-md-6'>
                            <Link to={`/news/${news.slug}`} className='text-decoration-none '>
                                <img src={news.banner} alt="" className='img-fluid' />
                                <h6 className='fw-bold mb-0 mt-1 text-dark'> {news.title}</h6></Link>
                        </div>)
                    }





                </div>

            </div>


        </div>
    );
};

export default Col6Card;