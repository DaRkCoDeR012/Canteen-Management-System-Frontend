import React from "react";
import Homepage from "./Homepage/Homepage";
import Register from "./Register/Register";
import UserDashBoard from "./UserDashboard/DashBoard";
import UserHome from "./UserHome/UserHome";
import Admin from "./Admin/Admin";  
import AdminPanel from "./AdminPanel/AdminPanel";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Routing() {
    let userflag = false;
    localStorage.getItem("usertoken") ? userflag = true : userflag = false;
    let adminflag = false;
    localStorage.getItem("admintoken") ? adminflag = true : adminflag = false;
  
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/userhome" element={userflag?<UserHome />:<Homepage />} />
            <Route exact path="/userdashboard" element={userflag?<UserDashBoard />:<Homepage />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/adminpanel" element={adminflag?<AdminPanel />:<Admin />}/>
          </Routes>
        </Router>
      </div>);
  }
  
  export default Routing;