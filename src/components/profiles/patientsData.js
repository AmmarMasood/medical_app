import React, { useState, useEffect } from "react";
import "../../style/patient-profile.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import { useDispatch,useSelector  } from "react-redux";
import {  getMedicalRecord } from "../../actions/index";

import {withRouter, Link} from "react-router-dom";

const PatientData = (props) => {
  const dispatch = useDispatch();
  const record = useSelector(state => state.record);
  // const [records, setRecords] = useState({});

useEffect(() => {
  if(!record.recordData.treatment){
    if(props.location.state.state){
      dispatch(getMedicalRecord(props.location.state.state, props.location.state.role,props.history));
    }else{
      props.history.push("/patient/profile");
    }
  }
}, [])

  const recordFields = () => {
    return (
      <div>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Anamneses</Card.Title>
          <Card.Text>{record.recordData.treatment ?record.recordData.treatment.anamneses : ""}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Diagnoses</Card.Title>
          <Card.Text>{record.recordData.treatment ?record.recordData.treatment.diagnoses : ""}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Medications</Card.Title>
          <Card.Text>{record.recordData.treatment ?record.recordData.treatment.medications : ""}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Medical Findings</Card.Title>
          <Card.Text>{record.recordData.treatment ?record.recordData.treatment.medicalFindings : ""}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Medical Letter</Card.Title>
          <Card.Text>{record.recordData.treatment ?record.recordData.treatment.medicalLetter : ""}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Location Of Treatment</Card.Title>
          <Card.Text>{record.recordData.treatment ?record.recordData.treatment.locationOfTreatment : ""}</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Text>Status: {record.recordData.treatment ?record.recordData.treatment.status : ""}</Card.Text>
          <Card.Text>Treatment Date: {record.recordData.treatment ?record.recordData.treatment.treatmentDate : "Not available"}</Card.Text>
        </Card.Body>
      </Card>

    </div>
    )
  };

  return (
    <>
    <div style={{textAlign: "left"}}>
      <Link to="/patient/profile">
    <Button variant="primary" type="submit" style={{margin: "5px 5px 5px 20px", padding: "5px 25px 5px 25px"}}>
    &#8592;{" "}  Go Back
    </Button>
    </Link>
    </div>
    <div className="main-patient">
  {console.log(record)}
  {console.log(props.location.state)}

      <div className="patient-records">
        <h4 className="patient-form-heading">Medical Records</h4>
        {recordFields()}
      </div>
      <div className="patient-details">
        <Form>
          <h4 className="patient-form-heading">Physician</h4>
          <Form.Group controlId="formGridName">
            <Form.Control type="text" placeholder="Enter Name" readOnly defaultValue={record.recordData.physician ?record.recordData.physician.name : ""}/>
          </Form.Group>
          <Form.Group controlId="formGridSurname">
            <Form.Control type="text" placeholder="Enter Surname" readOnly defaultValue={record.recordData.physician ?record.recordData.physician.surname : ""} />
          </Form.Group>
          <Form.Group controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter Email" readOnly defaultValue={record.recordData.physician ?record.recordData.physician.email : ""} />
          </Form.Group>
          <Form.Group controlId="formGridAddress">
            <Form.Control type="text" placeholder="Enter Address" readOnly defaultValue={record.recordData.physician ?record.recordData.physician.address : ""} />
          </Form.Group>
          <Form.Group controlId="formGridPhone">
            <Form.Control type="text" placeholder="Enter Phone Number" readOnly defaultValue={record.recordData.physician ?record.recordData.physician.phoneNumber : ""}/>
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
    </>
  );
};

export default PatientData;
