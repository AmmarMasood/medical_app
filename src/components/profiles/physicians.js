import React, { useState, useEffect } from "react";
import "../../style/patient-profile.css";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { proxy, physicianProfileUpdate, getCurrentPhysician, getPatientWithId, selectedRecordId } from "../../actions/index";
import axios from 'axios';
import {withRouter} from "react-router-dom";
const PhysicianProfile = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if(!localStorage.jwtToken){
      console.log("ERROR");
      props.history.push("/physician/login");
    }else{
    dispatch(getCurrentPhysician());
    axios.get(`${proxy}/getphysiciandetail`)
    .then(res =>{
      const data = res.data;
      setName(data.name ? data.name : "");
      setSurname(data.surname  ? data.surname : "");
      setAddress(data.address  ? data.address : "");
      setEmail(data.email  ? data.email : "");
      setPhoneNumber(data.phoneNumber  ? data.phoneNumber : "");
    })
    .catch(err => console.log(err));
    console.log(auth);
    axios.get(`${proxy}/getPatients`)
    .then(res => setRecords(res.data.list))
    .catch(err => console.log(err))
  }
  }, [])


  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,surname,email,address,phoneNumber
    }
    dispatch(physicianProfileUpdate(data));
  };

  const onPatientSelect = (patientId, recordId) => {
    // console.log(id);
    dispatch(selectedRecordId(recordId))
    dispatch(getPatientWithId(patientId,recordId, props.history));
  }

  const cards = () => {
    // const data = [
    //   {
    //     data: "Patient A",
    //     Physician: "Last Treatment",
    //     Date: "Last visit: 01.01.1999"
    //   },
    //   {
    //     data: "Patient B",
    //     Physician: "Last Treatment",
    //     Date: "Last visit: 01.01.1999"
    //   }
    // ];

    return records.map(d => (
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Record {d.recordId}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Patient Name: {d.patientName ? d.patientName : "Not availble"}
          </Card.Subtitle>
            <Card.Link onClick={() => onPatientSelect(d.patientId, d.recordId)} href="#">Details</Card.Link>
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
        <h4 className="patient-form-heading">Records Overview</h4>
        {cards()}
      </div>
    </div>
  );
};

export default withRouter(PhysicianProfile);
