import React, { useState } from "react";
import "../../style/patient-profile.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const patientTreatment = () => {
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
      <div className="patient-details">
        <Form>
          <h4 className="patient-form-heading">Personal Information</h4>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Col sm={6}>
              <Form.Control type="text" placeholder="Enter Name" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Enter Surname" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Date of Birth:
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="date" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Gender:
            </Form.Label>
            <Col sm={8}>
              <Form.Control as="select">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group controlId="formGridAddress">
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={6}>
              <Form.Control type="email" placeholder="Enter Email" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Enter Phone" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={6}>
              <Form.Control type="text" placeholder="Insurance Name" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Insurance ID" />
            </Col>
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Contact
            </Button>{" "}
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <Calendar onChange={""} style={{ width: "100%" }} />
          </div> */}
        </Form>
      </div>

      <div className="patient-records">
        <h4 className="patient-form-heading">Medical Records</h4>{" "}
        <Button
          style={{ marginBottom: "10px" }}
          variant="primary"
          type="submit"
        >
          Add Treatment
        </Button>
        {cards()}
      </div>
    </div>
  );
};

export default patientTreatment;
