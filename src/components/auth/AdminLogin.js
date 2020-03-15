import React, { useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { adminLogin } from "../../actions";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = e => {
    const data = { username, password };
    e.preventDefault();
    dispatch(adminLogin(data));
  };
  return (
    <div>
      <h1>The New Way Of Managing Your Health!</h1>
      <div class="cont">
        <div class="form">
          <form action="">
            <h1 className="form-heading">Admin Login</h1>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              class="user"
              placeholder="Username"
              required
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              class="pass"
              placeholder="Password"
              required
            />
            {/* <input type="checkbox" />
            <label className="form-p"> Remember Me</label> */}
            <button class="register" onClick={onSubmit}>
              Login
            </button>
            <p className="form-p" style={{ marginTop: "30px" }}>
              <Link className="form-p">Not an Admin? Click here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
