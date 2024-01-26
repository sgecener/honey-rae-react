import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";


export const CustomerNav = () => {
    const navigate = useNavigate()

    return <ul className="navbar">

        <li className="navbar-item">
            <Link to="/tickets" className="navbar-link">Tickets</Link>
        </li>
        <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Edit Profile</Link>
        </li>
        {localStorage.getItem("honey_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("honey_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
}