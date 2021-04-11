import { React, useState, useContext, useEffect } from "react";
import * as usersService from "../../services/usersService";
import AuthContext from "../../contexts/AuthContext";
import styles from "./Login.module.css";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const Login = ({ history }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { userInfo } = useContext(AuthContext);
  const [user, setUser] = userInfo;
  let msg = "";
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
          "Warning message",
          "Close after 3000ms",
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
    const token = await usersService
      .signIn(userData)
      .then((data) => {
        msg = "success";
        setUser(Email);
        history.push("/");
      })
      .catch((e) => {
        msg = "error";
        history.push("/Login");
      });
    createNotification(msg);
    
  };
  return (
    <>
      <form onSubmit={onSubmitLoginHandler} className={styles.form}>
        <h1>Login</h1>
        <label htmlFor="Email">
          <p>Email</p>
          <input
            type="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Password">
          <p>Password</p>
          <input
            type="text"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
};

export default Login;
