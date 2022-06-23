import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const Login = () => {
  const userRef = useRef();
  const passRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Sign In</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label htmlFor="">Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Username"
          ref={userRef}
        />
        <label htmlFor="">password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Password"
          ref={passRef}
        />
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
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
