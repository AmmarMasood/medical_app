import axios from "axios";
import { PATIENT_LOGIN, SET_CURRENT_USER, GET_ERRORS, SET_CURRENT_USER_INSURANCE } from "./types";
import setAuthToken from "../utils/setAuthToken";
export const proxy = "http://localhost:8080";
export const patientLogin = (userData,history) => dispatch => {
  // console.log(userData);
  axios.post(`${proxy}/authenticate`, userData)
  .then(res => {
    console.log(res)
    const token = `Bearer ${res.data.jwt}`;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
      history.push("/patient/profile");
  })
  .catch(err => console.log(err))
};

//gets the current logged in patient
export const getCurrentPatient = () => dispatch => {
    axios.get(`${proxy}/getpatientdetails`)
    .then(res =>
      dispatch({
        type:SET_CURRENT_USER,
        payload:res.data
      })
    )
    .catch(err => dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))
};
//gets the current logged in patients insurance
export const getCurrentPatientInsurance = () => dispatch => {
    axios.get(`${proxy}/getpatientinsurancedetails`)
    .then(res =>
      dispatch({
        type:SET_CURRENT_USER_INSURANCE,
        payload:res.data
      })
    )
    .catch(err => dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))
};
// user logoutUser
export const logoutUser = (history) => dispatch =>  {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
  history.push("/patient/login");
}

export const patientRegister = userData => dispatch => {
  // yahi hai na?
    axios.post(`${proxy}/register/patientregister`, userData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};



export const physicianLogin = (userData,history) => dispatch => {
  // console.log(userData);
  axios.post(`${proxy}/authenticate`, userData)
  .then(res => {
    const token = `Bearer ${res.data.jwt}`;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    history.push("/physician/profile");
  })
  .catch(err => console.log(err))

};
export const physicianRegister = userData => dispatch => {
  // console.log(userData);
  axios.post(`${proxy}/createPhysician`, userData)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

};

export const adminLogin = (userData,history) => dispatch => {
  axios.post(`${proxy}/authenticate`, userData)
  .then(res => {
    const token = `Bearer ${res.data.jwt}`;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    history.push("/admin/register/physician");
  })
  .catch(err => console.log(err))
  // console.log(userData);
};
export const physicianProfileUpdate = userData => dispatch => {
  const token = localStorage.jwtToken;
  axios.put(`${proxy}/updatephysician`,userData)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  // console.log(userData);
};

 export const patientProfileUpdate = userData => dispatch => {
   const token = localStorage.jwtToken;
   axios.put(`${proxy}/addpatientdetails`,userData)
   .then(res => console.log(res))
   .catch(err => console.log(err))
   // console.log(userData);
 };



export const updatePatientInsurance = userData => dispatch => {
  const token = localStorage.jwtToken;
  axios.put(`${proxy}/addpatientinsurancedetails`,userData)
  .then(res => console.log(res.request))
  .catch(err => console.log(err.request))
}
