import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { callApi } from './../../utils/functions';
import SkeletonLoader from "../../components/Utilites/SkeletonLoader";
import useLatest from "../../hooks/useLatest";
import SideBarAdd from "../AddsItems/SideBarAdd";
import NewsTab from "./NewsTab";
import useCategories from "../../hooks/useCategories";
import { getLabelBySlug } from "../../utils/getLabelBySlug";
import RelatedNews from "./share/RelatedNews";

const NewsByCategory = () => {
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)
    const { latestNews, isLoading, } = useLatest()
    const { categories, isLoading: categoriesLoad } = useCategories()


    useEffect(() => {
        setLoader(true)
        const fetchData = async () => {
            try {
                const res = await callApi('get', `/api/articles/list/${category}`);
                setData(res.data);
                setLoader(false)
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoader(false)
            }
        };

        fetchData();
    }, [category]);

    if (loader || isLoading || categoriesLoad) {
        return <SkeletonLoader />
    }

    const label = getLabelBySlug(categories, category);


    return (
        <div className="row mx-auto my-3 container-fluid ">
            <h1 className="border-2 border-bottom border-danger mb-3 ps-4">
                {label || ''}
            </h1>



            <div className="col-md-7 row  mx-auto">

                {data.length == 0 && <div className="card">
                    <h3 className="text-center py-5 ">No data in this category</h3>
                    <RelatedNews slug={'obilmbe-gajay-zuddhbirtir-ahwan-janiye-niraptta-prishde-prstab-pas'} />
                </div>}

                <Link to={`/news/${data[0]?.slug}`} className={data.length <= 0 ? 'd-none ' : ''}>
                    <div className=" position-relative">
                        <div className="img-contain rounded-0">
                            <img
                                className="img-fluid   rounded-0 "
                                src={data[0]?.banner}
                                alt="Zoomable Image"
                            />
                            <div className="overlay" />
                        </div>

                        <div className="position-absolute title-text">
                            <h2 className="text-white">
                                {data[0]?.title}
                            </h2>
                        </div>
                    </div>
                </Link>

                {
                    data.length >= 0 && data.slice(1, 7).map((news) => (
                        <div key={news.id} className="col-md-6 m-auto my-1 ">

                            <Link to={`/news/${news.slug}`} className="text-dark text-decoration-none ">
                                <div className="d-flex rounded newscard m-0 gap-2 " >
                                    <div>
                                        <h5 className="mb-0">{news.title}</h5>
                                        <p style={{ color: '#0004f4', fontSize: '14px' }} className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                            {news.date}</p>
                                    </div>
                                    <div>
                                        <img
                                            src={news.banner}
                                            alt=""
                                            className="common-image"
                                        />

                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))
                }


                <div>
                    <img className="img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OMgJX6-WJ09ITMYlmpiQB37tNxQz6fgVj2_xWAkAjuy-vj9IVkEe_b6xpjmA2BkZQ&usqp=CAU" alt="" />
                </div>


                {
                    data.slice(7, 17).map((news) => <div key={news.id} className="col-md-3 my-1 d-none d-md-block d-lg-block" >
                        <Link to={`/news/${news.slug}`} className="text-dark text-decoration-none ">
                            <div className="d-flex flex-column-reverse rounded newscard" >
                                <div>
                                    <h6 className="p-2"> {news.title}</h6>
                                    <p style={{ color: '#0004f4', fontSize: '14px' }} className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                        {news.date}</p>
                                </div>
                                <img src={news.banner} alt="" className="img-fluid rounded-0" style={{ height: '92px' }} />
                            </div>
                        </Link>
                    </div>)
                }

            </div>

            <div className="col-md-5 mx-auto">
                <div>
                    <div className="mb-1 mx-auto">
                        <h3
                            className="border-2 border-bottom border-danger"
                            style={{ paddingLeft: 0 }}
                        >
                            <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                                সর্বাধিক পঠিত
                            </span>
                        </h3>
                    </div>
                    {latestNews?.slice(0, 5).map((newsItem, index) => (
                        <div
                            key={index}
                            className="align-items-center d-flex gap-2 my-2 newscard p-2 rounded-1"
                            style={{ marginBottom: 2 }}
                        >
                            <div>
                                <img
                                    src={newsItem.banner}
                                    alt=""
                                    className="img-fluid mb-1 rounded-1"
                                    width="180px"
                                />
                            </div>
                            <div>
                                <h6 className="fs-6 text-danger">
                                    {newsItem.categories.map((category, index) => (
                                        <React.Fragment key={index}>
                                            <span>{category.label}</span>
                                            {index !== newsItem.categories.length - 1 && ", "}
                                        </React.Fragment>
                                    ))}

                                </h6>
                                <Link
                                    className="text-decoration-none text-dark"
                                    to={`/news/${newsItem.slug}`}
                                >
                                    <h6 className="fw-bold">
                                        {newsItem.title}
                                    </h6>
                                    <p style={{ color: '#0004f4', fontSize: '14px' }} className='mb-0'>
                                        <i className="fas fa-clock me-1 opacity-75"></i>
                                        {new Date(newsItem.date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>

                                </Link>
                            </div>
                        </div>
                    ))}


                    <SideBarAdd img={"http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif"} />
                    <NewsTab />
                </div>
            </div>

        </div>
    );
};

export default NewsByCategory;
