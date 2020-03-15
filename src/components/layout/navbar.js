import React from "react";
import "../../style/navbar.css";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        HCIS
      </Link>
      <div className="topnav-right">
        <Link className="link" to="/signup">
          Register
        </Link>
        <Link className="link" to="/sign">
          Login
        </Link>
      </div>
    </div>
  );
};

export default nav;
