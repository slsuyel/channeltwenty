
import { useEffect } from "react";
import { useState } from "react";

import SkeletonLoader from "../../../../components/Utilites/SkeletonLoader";

const SingleNews = () => {
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        setLoading(true);  // Set loading to true initially
        fetch(`https://newsnow-server.vercel.app/posts/64ecf1ddc4cc5ecd11e30627`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);
            })
    }, [])


    return (
        <>
            {
                loading ? <SkeletonLoader /> : <> <div className="w-100 mx-auto container-fluid">
                    <div className="container-fluid my-2 border-bottom border-2">
                        <p className="mb-0 category-tittle fs-6">
                            {news?.selectedCategoryValues && news.selectedCategoryValues.length > 0
                                ? news.selectedCategoryValues.map((item, index) => (
                                    <span key={index}>
                                        {item}
                                        {index !== news.selectedCategoryValues.length - 1 ? ',' : ''}
                                    </span>
                                ))
                                : null}
                        </p>
                        <h2 className="fs-2 my-2">{news?.title} </h2>
                        <div className="align-items-center d-flex flex-wrap justify-content-between mb-3">
                            <p className="mb-0">প্রকাশ: {new Date(news.date).toLocaleString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}, {new Date(news.date).toLocaleTimeString('bn-BD', { hour: 'numeric', minute: 'numeric', hour12: false })}</p>


                            {/*   <SocialShare /> */}
                        </div>
                    </div>

                    <div className="mx-auto row w-100 my-4">
                        <div className="col-md-8 col-sm-12 col-xl-8">
                            <img src={`https://newsnow-server.vercel.app/uploaded-images/1693249998371-%C3%A0%C2%A6%C2%9A%C3%A0%C2%A6%C2%9F%C3%A0%C2%A7%C2%8D%C3%A0%C2%A6%C2%9F%C3%A0%C2%A6%C2%97%C3%A0%C2%A7%C2%8D%C3%A0%C2%A6%C2%B0%C3%A0%C2%A6%C2%BE%C3%A0%C2%A6%C2%AE%C3%A0%C2%A7%C2%87.webp`} alt="" className="img-fluid rounded-1 w-100" style={{ maxHeight: '400px' }} />
                            <div>
                                <p className="my-3">
                                    <div className='border lh-base mb-2 p-2 rounded-1 text-secondary'
                                        dangerouslySetInnerHTML={{
                                            __html: `<p class='d-inline'> <span className="fs-5 text-secondary">
                                ${news?.author}:</span>${news?.content}</p>`
                                        }}
                                    />
                                </p>
                            </div>


                        </div>

                        {/* <div className="col-sm-12 col-md-4 col-xl-4">
                            <Sidebar1 />
                            <NewsCard />
                            <NewsCard />
                            <NewsMidCard />
                        </div> */}

                    </div>

                    {/* <div className="col-12">
                        <RelatedNews news={news} />
                    </div> */}

                </div></>
            }
        </>
    );
};

export default SingleNews;