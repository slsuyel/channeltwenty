
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LayoutContainer from "./LayoutContainer";

export default function WithNavbar() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <LayoutContainer>
        <Outlet />
        {/* <Footer /> */}
      </LayoutContainer>
    </div>

  );
}
