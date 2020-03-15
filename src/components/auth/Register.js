import React, { useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { patientRegister } from "../../actions/index";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (password === password2) {
      const data = {
        email,
        password
      };
      dispatch(patientRegister(data));
    } else {
      console.log("Passowords does not match");
    }
  };
  return (
    <div>
      <h1>The New Way Of Managing Your Health!</h1>
      <div class="cont">
        <div class="form">
          <form action="">
            <h1 className="form-heading">Create Your Account</h1>
            <input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              class="user"
              placeholder="Username"
            />
            <input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              class="pass"
              placeholder="Password"
            />
            <input
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              type="password"
              class="pass"
              placeholder="Confirm Password"
            />
            <button class="register" onClick={onSubmit}>
              Register
            </button>
            <p className="form-p">
              <Link className="form-p">Not a patient? Click here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
