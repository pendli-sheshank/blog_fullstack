import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Sign In</span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input className="loginInput" type="text" placeholder="Enter Email" />
        <label htmlFor="">password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Password"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
};

export default Login;
