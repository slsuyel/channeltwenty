import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SocialShare from "../../../components/SocialShare";

const SuccessPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    const slug = searchParams.get("slug");

    useEffect(() => {
        if (!title || !slug) {
            navigate('/dashboard/add/news');
        }
    }, [navigate, title, slug]);
    const handleGoBack = () => {
        navigate(-1); // This will navigate back in the history stack
    };
    return (
        <>
            <div className="container my-5">

                <button className="btn btn-outline-dark mb-3" onClick={handleGoBack}> Back</button>

                <h1 className="my-3  text-center ">
                    You have successfully created a news: {title}
                </h1>
                <div className="d-flex justify-content-center mt-5">
                    <SocialShare title={title} slug={slug} />
                </div>
            </div>
        </>
    );
};

export default SuccessPage;
