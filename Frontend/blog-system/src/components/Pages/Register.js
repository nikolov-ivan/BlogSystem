import { useState, useContext } from "react";
import * as usersService from "../../services/usersService";
import styles from "./Login.module.css";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let registerMessage = "";
  const createNotification = (type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "info":
        NotificationManager.info("Info message");
        break;
      case "success":
        NotificationManager.success("Successful Registration");
        break;
      case "warning":
        NotificationManager.warning(
          "Invalid password",
          "Insert more than 3 characters",
          3000
        );
        break;
      case "error":
        NotificationManager.error("Wrong register credentials", "", 5000, () => {
          alert("callback");
        });
        break;
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const userData = {};
    userData.Email = email;
    userData.Password = Password;
    if (Password.length < 3) {
      registerMessage = "warning";
      createNotification(registerMessage);
      history.push("/Register");
      return;
    }
    await usersService
      .Register(userData)
      .then((data) => {
        registerMessage = "success";
        history.push("/");
      })
      .catch((e) => {
        registerMessage = "error";
        history.push("/Register");
      });
    createNotification(registerMessage);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1>Register</h1>
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
          />
        </label>
        <div>
          <input type="submit" value="Register" className={styles.button}/>
        </div>
      </form>
    </div>
  );
};

export default Register;
