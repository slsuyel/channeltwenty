import { Link } from "react-router-dom";

const FooterMenu = () => {
    return (
        <div className="mt-3 py-4" style={{ background: '#919191' }}>
            <div className="d-flex flex-wrap gap-3 justify-content-center mb-2">
                <Link className="text-decoration-none text-white f-menu-a hover" to="/home">Home</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/video">Video</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/program">Program</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news">News</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/archive">Archive</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/login">Login</Link>
            </div>

            <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news/category/National"> জাতীয়</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news/category/bangladesh"> বাংলাদেশ</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news/category/ecomomics">অর্থনীতি</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news/category/international">আন্তর্জাতিক</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news/category/sports"> খেলাধূলা</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/news/category/crime"> অপরাধ</Link>
                <Link className="text-decoration-none text-white f-menu-a hover" to="/video">ভিডিও</Link>
            </div>

        </div>
    );
};

export default FooterMenu;