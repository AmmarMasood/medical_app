import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export default function Landing() {
  return (
    <div>
      <h1>The New Way Of Managing Your Health!</h1>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3 style={{margin: "30px 0 10px 0"}}>I'm a Patient</h3>
        <div>
          <Link to="/patient/login">
            <Button
              variant="primary"
              type="submit"
              style={{
                margin: "5px 5px 5px 20px",
                padding: "5px 35px 5px 35px",
                fontSize: "20px"
              }}
            >
              LogIn as a Patient
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/patient/register">
            <Button
              variant="primary"
              type="submit"
              style={{
                margin: "5px 5px 5px 20px",
                padding: "5px 25px 5px 25px",
                fontSize: "20px"
              }}
            >
              Register as a Patient
            </Button>
          </Link>
        </div>
          <h3 style={{margin: "30px 0 10px 0"}}>I'm a Physician</h3>
        <div>
          <Link to="/physician/login">
            <Button
              variant="info"
              type="submit"
              style={{
                margin: "5px 5px 5px 20px",
                padding: "5px 25px 5px 25px",
                fontSize: "20px"
              }}
            >
              LogIn as a Physician
            </Button>
          </Link>
        </div>
        <h3 style={{margin: "30px 0 10px 0"}}>I'm an Admin</h3>
        <div>
          <Link to="/admin/login">
            <Button
              variant="danger"
              type="submit"
              style={{
                margin: "5px 5px 5px 20px",
                padding: "5px 25px 5px 25px",
                fontSize: "20px"
              }}
            >
              LogIn as a Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
