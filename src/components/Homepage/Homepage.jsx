import React from "react";
import "./homepage.css"
import UserLogin from "../login/UserLogin";

function Homepage() {
  return (
    <div className="container-fluid text-center align-items-center parent bg-image">
        <div className="row">
            <div className="col-md-4 ">
                <div className="brand">
                    <h1 className="brandhead">CANTEEN BUDDY</h1>
                    <p className="brandpar">Giving your Hunger a new Option</p>
                </div>
            </div>
            <div className="col-md-8">
                <UserLogin className="form"/>
            </div>
        </div>
    </div>);
}

export default Homepage;
