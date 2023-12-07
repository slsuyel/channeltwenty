
import { Button } from "reactstrap";


export default function Navbar() {

  // const navigate = useNavigate()
  // const { logOut } = useContext(AuthContext)
  // const handleLogOut = async () => {
  //   logOut()
  //   navigate('/signin')
  // }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item mb-3">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <img src="https://cdn-icons-png.flaticon.com/512/137/137494.png" alt="" width={'50px'} />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown">
          <span className="nav-link" data-toggle="dropdown" href="#">
            <i className="fas fa-user-circle fa-lg fs-3"></i>
          </span>
          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right px-2">
            <span className="dropdown-item text-danger">Hello, </span>
            <span className="dropdown-item">Admin</span>
            <Button className="dropdown-item">
              <i className="fas fa-sign-out-alt mr-2"></i> Log out
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

