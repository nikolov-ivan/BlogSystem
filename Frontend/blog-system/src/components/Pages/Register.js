import {useState, useContext } from "react";
import * as usersService from "../../services/usersService";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {};
    userData.Email = email;
    userData.Password = Password;
    usersService.Register(userData);
    history.push("/");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Register</h1>
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
        />
      </label>
      <label htmlFor="ConfirmPassword">
        <p>Confirm Password</p>
        <input type="text" name="Confirm Password" />
      </label>
      <div>
        <input type="submit" value="Register" />
      </div>
    </form>
  );
};

export default Register;
