import React, { useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { physicianRegister } from "../../actions/index";
import { withRouter } from "react-router-dom";

const PhyRegisterByAdmin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const data = { username, password };
    dispatch(physicianRegister(data));
  };
  
  return (
    <div>
      <h1>Welcome to Admin!</h1>
      <div className="cont">
        <div className="form">
          <form action="">
            <h1 className="form-heading">Register Physician</h1>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
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
            <button className="register" onClick={onSubmit}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PhyRegisterByAdmin);
