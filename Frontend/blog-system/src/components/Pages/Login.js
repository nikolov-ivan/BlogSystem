import { React } from "react";

const Login = (props) => {
  return (
    <form>
      <h1>Login</h1>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="text" />
      </label>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;
