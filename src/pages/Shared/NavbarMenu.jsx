import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Shared.css';
import { useState } from 'react';

const NavbarMenu = () => {

    const [navbarExpanded, setNavbarExpanded] = useState(false);

    const closeNavbar = () => {
        setNavbarExpanded(false);
    };


    /* <button type="button" className="btn btn-primary rounded-0 text-end" onClick={toggleOffcanvas}>
                    <span className="text-white"><i className="fa-solid fa-bars"></i></span>
                </button> */

    return (
        <Navbar collapseOnSelect expand="lg" className='bg-white fw-bold navbar navbar-expand-lg navbar-light px-3 align-items-center' variant="light" expanded={navbarExpanded}>

            <Navbar.Toggle aria-controls="responsive-navbar-nav " onClick={() => setNavbarExpanded(!navbarExpanded)} className='border-0 collapsed navbar-toggler p-1 rounded-0 text-bg-primary' />




            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-evenly navbar-nav w-100 mt-2">

                    <Link>  <img src={logo} alt="Logo" className='my-2' style={{ width: '80px' }} /></Link>

                    <NavLink onClick={closeNavbar} to="/" className="nav-link text-white nav-links">Home</NavLink>
                    <NavLink onClick={closeNavbar} to="/video" className="nav-link text-white nav-links">Video</NavLink>
                    <NavLink onClick={closeNavbar} to="/program" className="nav-link text-white nav-links">Program</NavLink>
                    <NavLink onClick={closeNavbar} to="/news" className="nav-link text-white nav-links">News</NavLink>
                    <NavLink onClick={closeNavbar} to="/archive" className="nav-link text-white nav-links">Archive</NavLink>
                    <NavLink onClick={closeNavbar} to="/login" className="nav-link text-white nav-links">Login</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarMenu;
