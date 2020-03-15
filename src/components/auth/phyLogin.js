import React, { useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { physicianLogin } from "../../actions/index";

const Login = () => {
  const dispatch = useDispatch();
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const data = { ID, password };
    dispatch(physicianLogin(data));
  };
  return (
    <div>
      <h1>The New Way Of Managing Your Health!</h1>
      <div className="cont">
        <div className="form">
          <form action="">
            <h1 className="form-heading">Login</h1>
            <input
              value={ID}
              onChange={e => setID(e.target.value)}
              type="text"
              className="user"
              placeholder="ID"
              required
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="pass"
              placeholder="Password"
              required
            />
            <input
              type="checkbox"
              value={rememberMe}
              onChange={e => setRememberMe(e.target.value)}
            />
            <label className="form-p"> Remember Me</label>
            <button className="register" onClick={onSubmit}>
              Login
            </button>
            <p className="form-p">
              <Link className="form-p">Dont know your ID? Click here</Link>
            </p>
            <p className="form-p">
              <Link className="form-p" to="/patient/login">
                Not a physician? Click here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
