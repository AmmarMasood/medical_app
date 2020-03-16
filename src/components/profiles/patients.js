import React, { useState, useEffect } from "react";
import "../../style/patient-profile.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import { useDispatch,useSelector  } from "react-redux";
import {  proxy, patientProfileUpdate,updatePatientInsurance, getCurrentPatient, getCurrentPatientInsurance } from "../../actions/index";
import {withRouter} from "react-router-dom";
import axios from 'axios';

const PatientProfile = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insuranceName, setInsuranceName] = useState("");
  const [insuranceId, setInsuranceId] = useState("");

  useEffect(() => {
    if(!localStorage.jwtToken){
      console.log("ERROR");
      props.history.push("/patient/login");
    }else{
    dispatch(getCurrentPatient());
    dispatch(getCurrentPatientInsurance());
    axios.get(`${proxy}/getpatientdetails`)
    .then(res =>{
      const data = res.data;
      setName(data.name ? data.name : "");
      setSurname(data.surname  ? data.surname : "");
      setGender(data.gender  ? data.gender : "");
      setDate(data.date  ? data.date : "");
      setAddress(data.address  ? data.address : "");
      setEmail(data.email  ? data.email : "");
      setPhoneNumber(data.phoneNumber  ? data.phoneNumber : "");
    })
    .catch(err => console.log(err));
    axios.get(`${proxy}/getpatientinsurancedetails`)
    .then(res =>{
      const data = res.data;
      setInsuranceName(data.name  ? data.name : "");
      setInsuranceId(data.insuranceid  ? data.insuranceid : "");
    })
    .catch(err => console.log(err))
    console.log(auth);
  }
  }, [])

  const onProfileSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      surname,
      gender,
      address,
      email,
      phoneNumber
    };
    console.log(data);
    dispatch(patientProfileUpdate(data));
  };
  const onInsuranceSubmit = e => {
    e.preventDefault();
    const data = {
      name: insuranceName,
      insuranceid:insuranceId
    };
    console.log(data);
    dispatch(updatePatientInsurance(data));
  };
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
          <Form.Group controlId="formGridName">
            <Form.Control
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridSurname">
            <Form.Control
              value={surname}
              onChange={e => setSurname(e.target.value)}
              type="text"
              placeholder="Enter Surname"
              required
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Date of Birth:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                value={date}
                onChange={e => setDate(e.target.value)}
                type="date"
                placeholder=""
                required
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="formGridEmail">
            <Form.Control
              value={address}
              onChange={e => setAddress(e.target.value)}
              type="text"
              placeholder="Enter Address"
              required
            />
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={4}>
              Gender:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                value={gender}
                onChange={e => setGender(e.target.value)}
                as="select"
                required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={6}>
              <Form.Control
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                type="text"
                placeholder="Enter Phone Number"
                required
              />
            </Col>
          </Form.Group>
          <Button
            style={{ marginBottom: "15px" }}
            variant="primary"
            type="submit"
            onClick={onProfileSubmit}
          >
            Update Account
          </Button>{" "}
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={4}>
              <Form.Control
                value={insuranceName}
                onChange={e => setInsuranceName(e.target.value)}
                type="text"
                placeholder="Insurance Name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                value={insuranceId}
                onChange={e => setInsuranceId(e.target.value)}
                type="text"
                placeholder="Insurance ID"
                required
              />
            </Col>
            <Col sm={4}>
              <Button
                onClick={onInsuranceSubmit}
                variant="primary"
                type="submit"
              >
                Update Insurance
              </Button>{" "}
            </Col>
          </Form.Group>
          <Button
            style={{ marginBottom: "15px" }}
            variant="danger"
            type="submit"
          >
            Delete Account
          </Button>
        </Form>
      </div>

      <div className="patient-records">
        <h4 className="patient-form-heading">Medical Records</h4>
        {cards()}
      </div>
    </div>
  );
};

export default withRouter(PatientProfile);
