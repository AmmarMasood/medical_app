import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import axios from 'axios';
import {proxy} from "../../actions/index";
import {withRouter} from "react-router-dom";

const AppointPhy = (props) => {
    const [physicians, setPhysicians] = useState([]);
useEffect(() => {
  axios.get(`${proxy}/getallphysicians`)
  .then(res => setPhysicians(res.data.physiciansData))
  .catch(err => console.log(err))
}, []);

  const onPhysicianSelect = (d) => {
    const data = {"physicianId":d+""};
    console.log(data);
    axios.post(`${proxy}/createamedicalappointment`, data)
    .then(res => props.history.push("/patient/profile"))
    .catch(err => console.log(err));
  }

  const cards = () => {
    return physicians.map(d => (
      <Card key={d.id} style={{ width: "50vw" }}>
        <Card.Body>
          <Card.Title>{d.name + " " + d.surname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {d.email}
          </Card.Subtitle>
          <Card.Link href="#" onClick={() => onPhysicianSelect(d.id)}>Select</Card.Link>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center"}}>
        <h4 className="patient-form-heading" style={{marginBottom: "20px", marginTop:"10px"}}>All Physicians</h4>{" "}
        {cards()}
      </div>
    </div>
  );
};

export default withRouter(AppointPhy);
