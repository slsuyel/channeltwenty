import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import WithNavbar from "../layouts/WithNavbar";
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
                path: "/news",
                element: <NewsHome />,
            },
            {
                path: "/news/:id",
                element: <SingleNews />,
            },
            {
                path: "/category/:category",
                element: <NewsByCategory />,
            },


        ],
    },
    {
        path: 'dashboard',
        element: <UserCheck><WithNavbar /></UserCheck>,
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
                path: 'news',
                element: <AllNews />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'setting',
                element: <Setting />
            },

        ]
    }

]);