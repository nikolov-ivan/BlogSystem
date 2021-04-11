import { React, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import AuthContext from "../../contexts/AuthContext";
import GreetingMessage from "../GreetingMessage/GreetingMessage";
import { NotificationContainer } from "react-notifications";

const Header = () => {
  const { authInfo } = useContext(AuthContext);
  const { isAuthenticated } = authInfo;
  return (
    <>
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
          {!isAuthenticated ? (
            <li>
              <Link data-item="Register" to="/Register">
                Register
              </Link>
            </li>
          ) : null}
          {isAuthenticated ? (
            <li>
              <Link data-item="Logout" to="/Logout">
                Logout
              </Link>
            </li>
          ) : null}
          {isAuthenticated ? (
            <li>
              <Link data-item="Create" to="/Create">
                Create
              </Link>
            </li>
          ) : null}
          <li className={styles.greetingMessage}>
            <Link to="/">
              <GreetingMessage />
            </Link>
          </li>
        </ul>
      </nav>

      <NotificationContainer />
    </>
  );
};

export default Header;
