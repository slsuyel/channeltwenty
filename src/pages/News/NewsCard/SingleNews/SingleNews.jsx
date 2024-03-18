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
    const { id } = useParams();
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await callApi('get', `/api/articles/${id}`);
                setNews(res);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article:', error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    return (
        <>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <div className="w-100 mx-auto container-fluid">
                    <div className="container-fluid my-2 border-bottom border-2">
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
                        <div className="align-items-center d-flex flex-wrap justify-content-between mb-3">
                            <p className="mb-0">
                                প্রকাশ:{" "}
                                {new Date(news.date).toLocaleString("bn-BD", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })},{" "}
                                {new Date(news.date).toLocaleTimeString("bn-BD", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: false,
                                })}
                            </p>
                            <SocialShare />
                        </div>
                    </div>
                    <div className="mx-auto row w-100 my-4 bg-white">
                        <div className="col-md-8 col-sm-12 col-xl-8">
                            <img
                                src={news.banner}
                                alt=""
                                className="img-fluid rounded-1 w-100"
                                style={{ maxHeight: "400px" }}
                            />
                            <div>
                                <p className="my-3">
                                    <div
                                        className="border lh-base mb-2 p-2 rounded-1 text-secondary"
                                        dangerouslySetInnerHTML={{
                                            __html: `<p class="d-inline"><span class="fs-5 text-secondary">${news.author}: </span>${news.content}</p>`,
                                        }}
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-xl-4">
                            <SideBarAdd img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WKH0sDJasNwi0Ce_n39pFrLsmtuTWHjS3F9qCGqbB2XnAdVfATPkl37chgeDc4fKyQ&usqp=CAU'} />
                            <NewsTab />
                            <SideBarAdd img={"http://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif"} />
                            <RelatedNews />
                            <SideBarAdd img={'https://rb.gy/g7tc9g'} />
                        </div>
                    </div>
                    <EduSportsEconomy />
                </div>
            )}
        </>
    );
};

export default SingleNews;
