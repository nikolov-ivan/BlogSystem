import { React, useState, useContext, useEffect } from "react";
import * as usersService from "../../services/usersService";
import AuthContext from "../../contexts/AuthContext";
import styles from "./Login.module.css";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import isAuth from "../Hoc/isAuth";

const Login = ({ history }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { userInfo } = useContext(AuthContext);
  const [user, setUser] = userInfo;
  let message = "";
 
  
  const createNotification = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success("Successful Login");
        break;
      case "warning":
        NotificationManager.warning(
          "Invalid Password!",
          "Enter correct password again!",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Wrong login credentials", "", 5000, () => {
          alert("callback");
        });
        break;
    }
  };
  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();
    const userData = {};
    userData.email = Email;
    userData.password = Password;
    if (Password.length < 3) {
      message = "warning";
      createNotification(message);
      history.push("/Login");
      return;
    }
    const token = await usersService
      .signIn(userData)
      .then((data) => {
        message = "success";
        setUser(Email);
        localStorage.setItem("rememberMe", isAuth);
        localStorage.setItem("user", Email ? Email : "");
        history.push("/");
      })
      .catch((e) => {
        message = "error";
        history.push("/Login");
      });
    createNotification(message);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitLoginHandler} className={styles.form}>
        <h1>Login</h1>
        <label htmlFor="Email">
          <p>Email</p>
          <input
            className={styles.emailInput}
            type="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Password">
          <p>Password</p>
          <input
            className={styles.password}
            type="password"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <input className={styles.button} type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
