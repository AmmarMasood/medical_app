import React, { useState, useEffect } from "react";
import { Form, Col, Button, Row, Card, Alert } from "react-bootstrap";
import axios from 'axios';
import {proxy} from "../../actions/index";
import {withRouter} from "react-router-dom";

const DeletePatient = (props) => {
    const [patients, setPatients] = useState([]);
    const [success, setSuccess] = useState({});
    const [error, setError] = useState({});
    const [showErr, setShowErr] = useState(false);
    const [showSucc, setShowSucc] = useState(false);

useEffect(() => {
  axios.get(`${proxy}/admin/getallpatients`)
  .then(res => setPatients(res.data.getAllPatientDtos))
  .catch(err => console.log(err))
}, []);

function AlertDismissibleError() {
  if (showErr) {
    return (
      <Alert variant="danger" onClose={() => setShowErr(false)} dismissible>
        <Alert.Heading>Error: Can not delete Patient!</Alert.Heading>
      </Alert>
    );
  }
  return("")
}

function AlertDismissibleSuccess() {
  if (showSucc) {
    return (
      <Alert variant="success" onClose={() => setShowSucc(false)} dismissible>
        <Alert.Heading>Patient successfully deleted!</Alert.Heading>
      </Alert>
    );
  }
  return("")
}


  const onPatientSelect = (d) => {
    axios.post(`${proxy}/admin/deletePatient/?patientId=${d}`)
    .then(res =>  setPatients(patients.filter(p => p.id !== d)))
    .then(res => setShowSucc(true))
    .catch(err => setShowErr(true));
  }

  const cards = () => {
    return patients.map(d => (
      <Card key={d.id} style={{ width: "50vw" }}>
        <Card.Body>
          <Card.Title>{d.name + " " + d.surname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {d.email ? d.email : "Not Availble"}
          </Card.Subtitle>
          <Button
            variant="danger"
            type="submit"
            onClick={() => onPatientSelect(d.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center"}}>
        <h4 className="patient-form-heading" style={{marginBottom: "20px", marginTop:"10px"}}>Delete Patient</h4>{" "}
        <AlertDismissibleError />
        <AlertDismissibleSuccess />
        {cards()}
      </div>
    </div>
  );
};

export default withRouter(DeletePatient);
