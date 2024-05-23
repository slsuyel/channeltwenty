import React from 'react';
import MiddleAdd from '../../AddsItems/MiddleAdd';
import { Link } from 'react-router-dom';
import useNewsByCategory from './../../../hooks/useNewsByCategory';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';

const MiddleNewsBody = () => {

    const { data, loader } = useNewsByCategory('national');

    if (loader) {
        return <SkeletonLoader />
    }
    // console.log(data);

    return (
        <div className='col-md-6' style={{ background: '#fbfbfb' }}>
            <MiddleAdd title={'  R. N. TRADING LIMITED'} />

            <div className="mb-1 mx-auto  w-100" >
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        জাতীয়
                    </span>
                </h3>
            </div>

            <div className='row mx-auto w-100'>
                <div className="col-md-6 p-0">
                    <Link to={`/news/${data[0].slug}`} className='text-decoration-none '>
                        <div className="img-contain rounded-1">
                            <img
                                src={data[0].banner}
                                alt="Zoomable Image"
                            />

                        </div>

                        <div className="">

                            <h2 className="fs-4 fw-bold lh-1 mb-0 text-dark">

                                {data[0].title}
                            </h2>
                            <p style={{ color: "#243ae2" }} className='mb-0'> {data[0].date}</p>

                            <p className='fs-6 mb-0 text-secondary' dangerouslySetInnerHTML={{ __html: data[0].content.slice(0, 100) }}></p>

                        </div>
                    </Link>


                </div>

                <div className='col-md-6 mx-auto row'>

                    {
                        data.slice(1, 5).map((news) =>
                            <div key={news.id} className='col-md-6 mb-3'>
                                <Link to={`/news/${news.slug}`} className='text-decoration-none '>
                                    <img src={news.banner} alt="" className='img-fluid' />
                                    <h6 className='fw-bold mb-0 mt-1 text-dark news-title-national '>
                                        {news.title}
                                    </h6></Link>
                            </div>)
                    }




                </div>

            </div>

        </div>
    );
};

export default MiddleNewsBody;