import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <button className="registerRegisterButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "12px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
