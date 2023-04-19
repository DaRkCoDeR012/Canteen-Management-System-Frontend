import React from "react";
import Update from '../Update/UpdateUser.jsx'
import Profile1 from './Profile1'

import "./profile.css";

function UserProfile() {
  
  const [isActive, setIsActive] = React.useState("Update");

  return (
    <div>
      <div className="col-12 profile">
        <div className="card mb-3 menucard1" style={{ maxWidth: "1040px" }}>
          <div className="card1 row">
            <div className="col-md-12 cardbod">
              <div className="card-body">
                <h3>
                  <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                  Profile
                </h3>
                <hr />
                <button className="nav-link "><Profile1/></button>
                <button className={
                      isActive === "Update" ? "nav-link" : "nav-link"
                    }  id="Update" className="button1" ><Update/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

