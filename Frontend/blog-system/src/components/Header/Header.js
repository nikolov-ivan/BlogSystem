import { React } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuItems}>
        <li>
          <Link data-item="Home" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link data-item="Login" to="/Login">
            Login
          </Link>
        </li>
        <li>
          <Link data-item="Register" to="/Register">
            Register
          </Link>
        </li>
        <li>
          <Link data-item="Logout" to="/Logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
