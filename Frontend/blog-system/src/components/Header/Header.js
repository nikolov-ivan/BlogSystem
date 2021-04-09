import { React, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import AuthContext from "../../contexts/AuthContext";
import Logout from "../Pages/Logout";

const Header = () => {
  const { authInfo } = useContext(AuthContext);
  const { isAuthenticated } = authInfo;
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuItems}>
        <li>
          <Link data-item="Home" to="/">
            Home
          </Link>
        </li>
        {!isAuthenticated ? (
          <li>
            <Link data-item="Login" to="/Login">
              Login
            </Link>
          </li>
        ) : null}
        {!isAuthenticated ? <li><Link data-item="Register" to='/Register' >Register</Link></li> : null}
        {isAuthenticated ? (
          <li>
            <Link data-item="Logout" to="/Logout">
              Logout
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Header;
