import { React } from "react";
import * as usersService from "../../services/usersService";

const Register = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();    
    
    const email = e.target.Email.value;
    const password = e.target.Password.value;
    const userData = {};

    userData.email = email;
    userData.password = password;

    usersService.Register(userData);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Register</h1>
      <label htmlFor="Email">
        <p>Email</p>
        <input type="text" name="Email"/>
      </label>
      <label htmlFor="Password">
        <p>Password</p>
        <input type="text" name="Password"/>
      </label>
      <label>
        <p>Confirm Password</p>
        <input type="text" />
      </label>
      <div>
        <input type="submit" value="Register" />
      </div>
    </form>
  );
};

export default Register;
