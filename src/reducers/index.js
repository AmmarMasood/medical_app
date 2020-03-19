import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import medicalrecordReducer from "./medicalrecordReducer.js";
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  record: medicalrecordReducer
});
