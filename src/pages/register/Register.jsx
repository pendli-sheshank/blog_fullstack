import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Username"
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Email"
        />
        <label htmlFor="">password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter Password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerRegisterButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
