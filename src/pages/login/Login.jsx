import "./Login.css";

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
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default Login;
