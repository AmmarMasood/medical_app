import React, { useState } from "react";
import "../../style/patient-profile.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";

const patientData = () => {
  const cards = () => {
    const data = [
      {
        data: "Example data 1",
        Physician: "Physician Name",
        Date: "01.01.1999"
      },
      {
        data: "Example data 2",
        Physician: "Physician Name",
        Date: "01.01.1999"
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
      <div className="patient-records">
        <h4 className="patient-form-heading">Medical Records</h4>
        {cards()}
      </div>
      <div className="patient-details">
        <Form>
          <h4 className="patient-form-heading">Physician</h4>
          <Form.Group controlId="formGridName">
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="formGridSurname">
            <Form.Control type="text" placeholder="Enter Surname" />
          </Form.Group>
          <Form.Group controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group controlId="formGridAddress">
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Group controlId="formGridPhone">
            <Form.Control type="text" placeholder="Enter Phone Number" />
          </Form.Group>
          <div className="patient-data-form-btns">
            <Button variant="primary" type="submit">
              Contact
            </Button>
            <br />
            <Button variant="primary" type="submit">
              Make Appointment
            </Button>
            <br />
            <Button variant="primary" type="submit">
              Dismiss Appointment
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default patientData;
