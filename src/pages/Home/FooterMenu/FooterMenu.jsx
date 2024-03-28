import { Link } from "react-router-dom";

const FooterMenu = () => {
    return (
        <div className="mt-3 py-3" style={{ background: '#919191' }}>
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-2">
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/home">Home</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/video">Video</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/program">Program</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/news">News</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/archive">Archive</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login">Login</Link>
            </div>

            <div className="d-flex flex-wrap gap-2 justify-content-center">
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login"> জাতীয়</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login"> বাংলাদেশ</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login">অর্থনীতি</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login">আন্তর্জাতিক</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login"> খেলাধূলা</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login"> অপরাধ</Link>
                <Link className="text-decoration-none text-white fs-5 mx-3 hover" to="/login">ভিডিও</Link>
            </div>

        </div>
    );
};

export default FooterMenu;