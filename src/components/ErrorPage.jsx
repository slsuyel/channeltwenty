/* eslint-disable react/no-unescaped-entities */

import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page  mt-5 text-center">
            <img
                src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
                alt=""
                className="img-fluid img-thumbnail mx-auto w-25"
            />
            <h1>Oops!</h1>
            <h1>সম্ভবত পেজটি এখনও তৈরি হয়নি। পরে চেষ্টা করুন</h1>

            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>


            <Link
                className="btn btn-outline-danger fw-bold"
                to="/"
            >
                Let's Back to home
            </Link>
        </div>
    );
}

export default ErrorPage;
