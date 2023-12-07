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


        ],
    },
    {
        path: 'dashboard',
        element: <ScrollToTop><WithNavbar /></ScrollToTop>,
        children: [
            {
                path: '',
                element: <div>Home  2</div>
            },

        ]
    }

]);