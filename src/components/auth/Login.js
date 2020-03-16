import React, { useState } from "react";
import "../../style/login.css";
import { useDispatch } from "react-redux";
import { patientLogin } from "../../actions/index";

import { Link, withRouter } from "react-router-dom";
const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const data = {
      username,
      password
    };
    dispatch(patientLogin(data, props.history));
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
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              className="user"
              placeholder="Username"
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
            <Link to="/patient/register">
              <button className="register-button">Register Now</button>
            </Link>
            <p className="form-p">
              <Link className="form-p" to="/physician/login">
                Are you a physician? Click here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
