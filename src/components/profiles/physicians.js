import React, { useState } from "react";
import "../../style/patient-profile.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { physicianProfileUpdate } from "../../actions/index";

const PhysicianProfile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,surname,email,address,phoneNumber
    }
    dispatch(physicianProfileUpdate(data));
  }
  const cards = () => {

    const data = [
      {
        data: "Patient A",
        Physician: "Last Treatment",
        Date: "Last visit: 01.01.1999"
      },
      {
        data: "Patient B",
        Physician: "Last Treatment",
        Date: "Last visit: 01.01.1999"
      }
    ];
    return data.map(d => (
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{d.data}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {d.Physician}
          </Card.Subtitle>
          <Card.Text>{d.Date}</Card.Text>
          <Card.Link href="#">Details</Card.Link>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div className="main-patient">
      <div className="patient-details">
        <Form>
          <h4 className="patient-form-heading">Personal Information</h4>
          <Form.Group controlId="formGridName">
            <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formGridSurname">
            <Form.Control value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Enter Surname" />
          </Form.Group>
          <Form.Group controlId="formGridEmail">
            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formGridAddress">
            <Form.Control value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="Enter Address" />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Control value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text" placeholder="Enter Phone Number" />
          </Form.Group>
          <Button onClick={onSubmit} variant="primary" type="submit">
             Update Account
          </Button>{" "}
        </Form>
      </div>

      <div className="patient-records">
        <h4 className="patient-form-heading">Patients Overview</h4>
        {cards()}
      </div>
    </div>
  );
};

export default PhysicianProfile;
