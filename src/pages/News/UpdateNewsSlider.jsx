import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Slider from "react-slick";
// import useAllNews from '../../hooks/useAllNews';
import SkeletonLoader from '../../components/Utilites/SkeletonLoader';
import useLatest from '../../hooks/useLatest';


const UpdateNewsSlider = () => {

    const { latestNews, isLoading, } = useLatest()



    if (isLoading) {
        return <SkeletonLoader />
    }

    const settings = {
        // variableWidth: true,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="w-100 mx-auto container-fluid">
            <div className="mb-1 mx-auto ps-4 w-100">
                <h3 className="border-2 border-bottom border-danger" style={{ paddingLeft: 0 }}>
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        আপডেট নিউজ
                    </span>
                </h3>
            </div>
            <div style={{ width: '99%', height: '100%' }} className="mx-auto container-fluid">
                <Slider {...settings}>
                    {latestNews.map((item) => (
                        <div key={item.id} className="position-relative">

                            <Link to={`/news/${item.slug}`}>
                                <div className="img-contain rounded-0">
                                    <img
                                        className='latest-news-img'
                                        src={item.banner}
                                        alt="Zoomable Image"
                                    />
                                    <div className="overlay border border-2 border-bottom-0 border-top-0" />
                                </div>
                            </Link>
                            <div className="position-absolute title-text">
                                {/* <span className="p-1 primary-bg px-2 py-0 text-nowrap text-sm text-white">
                                    জাতীয়
                                </span> */}
                                {/* Use Link instead of a */}
                                <Link to={`/news/${item.slug}`}
                                    className="text-decoration-none text-white"

                                >
                                    <h5 className="">
                                        {item.title}
                                    </h5>
                                    {/*  <p className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                        ডিসেম্বর ২৪, ২০২৩</p> */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default UpdateNewsSlider;
