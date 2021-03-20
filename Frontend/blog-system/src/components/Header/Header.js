import { React } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
