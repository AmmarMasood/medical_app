import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Register from "./components/auth/Register";
import phyLogin from "./components/auth/phyLogin";
import patientProfile from "./components/profiles/patients";
import patientData from "./components/profiles/patientsData";
import PhysicianProfile from "./components/profiles/physicians";
import patientTreatment from "./components/profiles/patientTreatment";
import AdminLogin from "./components/auth/AdminLogin";
import PhyRegisterByAdmin from "./components/auth/phyRegisterbyAdmin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Admin Routes */}
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route exact path="/admin/register/physician" component={PhyRegisterByAdmin} />
        {/* Patient Routes */}
        <Route exact path="/patient/login" component={Login} />
        <Route exact path="/patient/register" component={Register} />
        <Route exact path="/patient/profile" component={patientProfile} />
        {/* Physician Routes */}
        <Route exact path="/physician/login" component={phyLogin} />
        <Route exact path="/physician/profile" component={PhysicianProfile} />
        <Route
          exact
          path="/physician/patient/treatment"
          component={patientTreatment}
        />
        {/* Both Can see depending on whos login */}
        <Route exact path="/profile/patient/data" component={patientData} />
      </div>
    </Router>
  );
}

export default App;
