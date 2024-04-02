
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/footer-logo.png';
import './Shared.css';
import { useState } from 'react';

const NavbarMenu = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };


    return (
        <div className='sticky-top bg-white'>
            <div className='d-flex justify-content-between py-2  text-white align-items-center'>
                <Link to="/" className="navbar-brand d-none d-md-block">
                    <img src={logo} alt="Logo" style={{ width: '70px' }} />
                </Link>
                <NavLink to="/" className="nav-link  nav-links">Home</NavLink>
                <NavLink to="/video" className="nav-link  nav-links">Video</NavLink>
                <NavLink to="/program" className="nav-link  nav-links">Program</NavLink>
                <NavLink to="/news" className="nav-link  nav-links">News</NavLink>
                <NavLink to="/archive" className="nav-link  nav-links">Archive</NavLink>
                <NavLink to="/login" className="nav-link  nav-links">Login</NavLink>

                <div className={`dropdown  ${isDropdownOpen ? 'show' : ''}`}>
                    <button
                        className="border-0  bg-transparent fs-4"
                        id="dropdown-search"
                        onClick={handleDropdownToggle}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                    <div className={`dropdown-menu p-0 rounded-3 rounded-end-5 search-btn  ${isDropdownOpen ? 'show' : ''}`}>
                        <form className="d-flex">
                            <input type="search" placeholder="খুঁজুন" aria-label="Search" className="form-control border-0 bg-2nd " />

                            <button type="submit" className="bg-red border-0 rounded-end-4 px-2"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavbarMenu;
