
import { NavLink as Link } from 'react-router-dom';

export default function Sidebar() {

  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1" >
        <Link to="/dashboard" className="brand-link text-decoration-none py-2 bg-black">
          <img
            src="https://w7.pngwing.com/pngs/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"
            alt="Dashboard Logo"
            className="brand-image img-circle elevation-1"
          />
          <span className="brand-text font-weight-light">Admin Dashboard</span>
        </Link>



        <div className="sidebar" style={{ height: '100vh' }}>
          <nav className="mt-2">
            <ul
              className="nav nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >

              <li className="nav-item">
                <Link to="/dashboard/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p className='text-white'>Home</p>
                </Link>
              </li>





              <li className="nav-item">
                <Link to="/dashboard/add/news" className="nav-link">
                  <i className="nav-icon fa-regular fa-newspaper"></i>
                  <p className='text-white'>Add News</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard/news" className="nav-link">
                  <i className="nav-icon fa-solid fa-newspaper"></i>
                  <p className='text-white'>News</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/category" className="nav-link">
                  <i className="nav-icon fa-solid fa-newspaper"></i>
                  <p className='text-white'>Category</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard/setting" className="nav-link">
                  <i className="nav-icon fa-solid fa-gear"></i>
                  <p className='text-white'>Setting</p>
                </Link>
              </li>


              {/* <i class="fa-solid fa-calendar-check"></i>"></i> */}
              <div>
                <hr className='bg-black m-0 my-2' />
              </div>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fa-solid fa-house-chimney-user"></i>
                  <p className='text-white'> Home </p>
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
