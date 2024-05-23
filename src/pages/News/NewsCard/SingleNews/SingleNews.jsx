import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../../../components/Utilites/SkeletonLoader";
import SocialShare from "../../../../components/SocialShare";
import NewsTab from "../../NewsTab";
import RelatedNews from "../../share/RelatedNews";
import SideBarAdd from "../../../AddsItems/SideBarAdd";
import EduSportsEconomy from "../../EduSportsEconomy";
import { callApi } from "../../../../utils/functions";

const SingleNews = () => {
    const { slug } = useParams();
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true)
            try {

                const res = await callApi('GET', `/api/article/${slug}`);
                setNews(res);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article:', error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);



    // if (loading) {
    //     return <SkeletonLoader />
    // }



    return (
        <>

            <div className="w-100 mx-auto row container-fluid">

                <div className="col-md-8">
                    {
                        loading ? <SkeletonLoader /> : <>
                            <div className="my-2 border-bottom border-2">
                                <p className="mb-0 category-tittle fs-6">
                                    {news?.categories && news.categories.length > 0
                                        ? news.categories.map((item, index) => (
                                            <span key={index}>
                                                {item.label}
                                                {index !== news.categories.length - 1 ? "," : ""}
                                            </span>
                                        ))
                                        : null}
                                </p>
                                <h2 className="fs-2 my-2">{news?.title}</h2>
                                <div className="align-items-center d-flex flex-wrap justify-content-between mb-3 me-2">
                                    <p className="mb-0">
                                        <span className="fs-5 text-secondary"> {news.author}</span>
                                        <br />
                                        প্রকাশ:{news.date}
                                    </p>
                                    <SocialShare title={news.title} slug={news.slug} />
                                </div>
                            </div>

                            <div>
                                <div className="single-news-i text-center ">
                                    <img
                                        src={news.banner}
                                        alt=""
                                        className="img-fluid rounded-1 "
                                        style={{ maxHeight: "370px" }}
                                    />
                                </div>

                                <div>
                                    <p className="my-3">
                                        <div
                                            className="border lh-base mb-2 p-2 rounded-1 text-secondary sss--nnees" style={{ fontSize: '19px' }}
                                            dangerouslySetInnerHTML={{
                                                __html: `<p class="d-inline "><span class=" text-secondary"> </span>${news.content}</p>`,
                                            }}
                                        />
                                    </p>
                                </div>
                            </div></>
                    }


                </div>

                <div className="col-md-4">

                    <NewsTab />
                    <SideBarAdd img={"http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif"} />
                    <RelatedNews slug={news.slug ? news.slug : 'obilmbe-gajay-zuddhbirtir-ahwan-janiye-niraptta-prishde-prstab-pas'} />
                </div>
                <EduSportsEconomy />
            </div>

        </>
    );
};

export default SingleNews;
