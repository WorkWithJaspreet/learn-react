import { NavLink, Outlet } from "react-router";
import "./header.css";

function Navbar() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink className="link" to="/">
            <h2>Logo</h2>
          </NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "custom-active link" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/signup">
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/forgot-password">
                Forgot Password
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                College
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
