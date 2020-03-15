import React, { useState } from "react";
import "../../style/login.css";
import { useDispatch } from "react-redux";
import { patientLogin } from "../../actions/index";

import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const data = {
      email,
      password,
      rememberMe
    };
    dispatch(patientLogin(data));
    // console.log(data);
  };
  return (
    <div>
      <h1>The New Way Of Managing Your Health!</h1>
      <div className="cont">
        <div className="form">
          <form action="">
            <h1 className="form-heading">Login</h1>
            <input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="user"
              placeholder="E-Mail"
            />
            <input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="pass"
              placeholder="Password"
            />
            <input
              type="checkbox"
              value={rememberMe}
              onChange={e => setRememberMe(e.target.value)}
            />
            <label className="form-p"> Remember Me</label>
            <button className="login" onClick={onSubmit}>
              Login
            </button>
            <label className="form-p">No Account yet? {"  "}</label>
            <button className="register-button">Register Now</button>
            <p className="form-p">
              <Link className="form-p">Are you a physician? Click here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
