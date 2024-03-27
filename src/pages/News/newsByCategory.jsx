import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { callApi } from './../../utils/functions';
import SkeletonLoader from "../../components/Utilites/SkeletonLoader";

const NewsByCategory = () => {
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)

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

    if (loader) {
        return <SkeletonLoader />
    }

    console.log(data);
    return (
        <div className="row mx-auto my-3">
            <div className='col-md-3'>

                {data.slice(0, 8).map((newsItem, index) => (
                    <div
                        key={index}
                        className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1"
                        style={{ marginBottom: 2 }}
                    >
                        <div>
                            <img loading="lazy"
                                src={newsItem.banner}
                                alt=""
                                className="img-fluid mb-1"
                                width="180px"
                            />
                        </div>
                        <div>
                            {/* Replace <a> with <Link> */}
                            <Link
                                className="text-decoration-none text-dark"
                                to={`/news/${newsItem.id}`}
                            >
                                <h6 className="fw-bold">
                                    {newsItem.title}
                                </h6>
                                <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i>
                                    {newsItem.date}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="col-md-6">
                <div className="row">
                    {data.slice(0, 9).map((newsItem, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <Link to={`/news/${newsItem.id}`} className="text-decoration-none text-dark">
                                <img loading="lazy" src={newsItem.banner} alt="" className="img-fluid mb-2" />
                                <h5 className="fw-bold">{newsItem.title}</h5>
                                <p style={{ color: "#243ae2" }} className="mb-0">
                                    <i className="fas fa-clock me-1" aria-hidden="true"></i> {newsItem.date}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='col-md-3'>

                {data.slice(0, 8).map((newsItem, index) => (
                    <div
                        key={index}
                        className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1"
                        style={{ marginBottom: 2 }}
                    >
                        <div>
                            <img loading="lazy"
                                src={newsItem.banner}
                                alt=""
                                className="img-fluid mb-1"
                                width="180px"
                            />
                        </div>
                        <div>
                            {/* Replace <a> with <Link> */}
                            <Link
                                className="text-decoration-none text-dark"
                                to={`/news/${newsItem.id}`}
                            >
                                <h6 className="fw-bold">
                                    {newsItem.title}
                                </h6>
                                <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i>
                                    {newsItem.date}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default NewsByCategory;
