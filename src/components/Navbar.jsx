
// import { Button } from "reactstrap";


// export default function Navbar() {

//   // const navigate = useNavigate()
//   // const { logOut } = useContext(AuthContext)
//   // const handleLogOut = async () => {
//   //   logOut()
//   //   navigate('/signin')
//   // }

//   return (
//     <nav className="main-header navbar navbar-expand navbar-white navbar-light">
//       <ul className="navbar-nav">
//         <li className="nav-item mb-3">
//           <a className="nav-link" data-widget="pushmenu" href="#" role="button">
//             <img src="https://cdn-icons-png.flaticon.com/512/137/137494.png" alt="" width={'50px'} />
//           </a>
//         </li>
//       </ul>
//       <ul className="navbar-nav ml-auto">

//         <li className="nav-item dropdown">
//           <span className="nav-link" data-toggle="dropdown" href="#">
//             <i className="fas fa-user-circle fa-lg fs-3"></i>
//           </span>
//           <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right px-2">
//             <span className="dropdown-item text-danger">Hello, </span>
//             <span className="dropdown-item">Admin</span>
//             <Button className="dropdown-item">
//               <i className="fas fa-sign-out-alt mr-2"></i> Log out
//             </Button>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// }


// import React, { useState } from "react";

// import './Components.css';
// // import NightDay from "../Utilites/NightDay";
// import { Link, useNavigate } from "react-router-dom";
// import { callApi } from "../utils/functions";
// import { toast } from "react-toastify";

// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
// const navigate = useNavigate()
//   const handleIconClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleLogout = async () => {
//     try {
//       const res = await callApi('Post', '/api/user/logout');
//       if (res.message) {
//         toast.success('Logged out successfully');
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('Error occurred during logout:', error);
//     }
//   };

//   return (
//     <nav className="bg-gradient-info main-header navbar navbar-expand navbar-white navbar-light">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" data-widget="pushmenu" href="#" role="button">
//             <i className="fa-bars fas fs-2 text-white" />
//           </a>
//         </li>
//       </ul>

//       <ul className="navbar-nav ml-auto me-3">
//         <li className="nav-item dropdown">
//           <div className="toogle-user">
//             {/* Night Mood */}
//             {/* <NightDay /> */}
//             <div className="custom-li-item">
//               <p className="mb-0">Super Admin</p>
//               <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" className="btn" alt="" width={60} onClick={handleIconClick} />
//             </div>
//             {showDropdown && (
//               <div className="dropdown-menu dropdown-menu-end pt-0 show w-100">
//                 <p className="bg-nil fs-5 mb-0 mb-2 py-2 rounded-top-1 text-capitalize text-center text-white">admin</p>
//                 <Link to="/dashboard/profile" className="dropdown-item">
//                   <i className="fas fa-user mr-2"></i> Profile
//                 </Link>
//                 <button className="dropdown-item" onClick={handleLogout}>
//                   <i className="fas fa-sign-out-alt mr-2"></i> Logout
//                 </button>
//               </div>

//             )}
//           </div>
//         </li>
//       </ul>
//     </nav>
//   );
// }
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { callApi } from './../utils/functions';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Define the onClick handler for Profile click
function handleProfileClick() {
  console.log("Profile clicked");
  // Add your logic here
}

const Navbar = () => {
  const navigate = useNavigate(); // Move the declaration of navigate here

  // Define the onClick handler for Logout click
  const handleLogoutClick = async () => {
    try {
      const res = await callApi('Post', '/api/user/logout');
      if (res.message) {
        toast.success('Logged out successfully');
        navigate('/');
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };

  const items = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
      onClick: handleProfileClick,
    },
    {
      label: "Log Out",
      key: "2",
      icon: <LogoutOutlined />,
      onClick: handleLogoutClick,
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <div className="d-flex gap-3 align-item-center w-100 pe-0">
      {/* <DayNight /> */}
      <Dropdown.Button
        menu={menuProps}
        placement="bottom"
        icon={<UserOutlined />}
      >
        Admin
      </Dropdown.Button>
    </div>
  );
};

export default Navbar;
