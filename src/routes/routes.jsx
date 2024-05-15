import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";

import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Video from "../pages/Home/Video/Video";
import CategoryVideo from "../pages/Home/Video/CategoryVideo";
import Program from "../pages/Home/Program/Program";
import CategoryProgram from "../pages/Home/Program/CategoryProgram";
import Archive from "../pages/Home/Archive/Archive";
import Login from "../components/Login";
import ScrollToTop from "../components/ScrollToTop";
import NewsHome from "../pages/News/NewsHome";
import SingleNews from "../pages/News/NewsCard/SingleNews/SingleNews";
import DashHome from "../pages/Dashboard/DashHome/DashHome";
import AddBlog from "../pages/Dashboard/Blogs/AddBlog";
import AllNews from "../pages/Dashboard/Blogs/AllNews";
import Setting from "../pages/Dashboard/Setting/Setting";
import UserCheck from "./UserCheck";
import Category from "../pages/Dashboard/Category/Category";

import NewsByCategory from "./../pages/News/newsByCategory";
import Contact from "../components/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "../pages/PrivacyPolicy/AboutUs";
import SuccessPage from "../pages/Dashboard/Blogs/SuccessPage";
import DbLayout from "../layouts/DbLayout";
import Videos from "../pages/Dashboard/Videos/Videos";
import EditPost from "../pages/Dashboard/Blogs/EditPost";
import Editor from "../components/ui/Editor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ScrollToTop><WithOutnavbar /></ScrollToTop>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/test",
                element: <Editor />,
            },
            {
                path: "/video",
                element: <Video />,
            },
            {
                path: "/video/:category",
                element: <CategoryVideo />,
            },
            {
                path: "/program",
                element: <Program />,
            },
            {
                path: "/program/:category",
                element: <CategoryProgram />,
            },
            {
                path: "/archive",
                element: <Archive />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/news",
                element: <NewsHome />,
            },
            // {
            //     path: "/news/:id",
            //     element: <SingleNews />,
            // },
            {
                path: `/news/:slug`,
                element: <SingleNews />,
            },
            {
                path: "/news/category/:category",
                element: <NewsByCategory />,
            },


        ],
    },
    {
        path: 'dashboard',
        element: <UserCheck><DbLayout /></UserCheck>,
        children: [
            {
                path: '',
                element: <DashHome />
            },
            {
                path: 'add/news',
                element: <AddBlog />
            },
            {
                path: 'success-post',
                element: <SuccessPage />
            },
            {
                path: 'news',
                element: <AllNews />
            },
            {
                path: 'edit/:id',
                element: <EditPost />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'videos',
                element: <Videos />
            },
            {
                path: 'setting',
                element: <Setting />
            },


        ]
    }

]);