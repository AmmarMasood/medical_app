import { GET_PATIENT_INFORMATION_WITH_ID } from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initialState = {
  patientInformation: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PATIENT_INFORMATION_WITH_ID:
    console.log(action.payload)
      return {
        patientInformation: action.payload,
      }
    default:
      return state;
  }
}
