import React from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

import "./profile.css";

function UserProfile() {
  const { auth } = useAuth();
  const user_id = auth?.foundUser?._id;
  const user_name = auth?.foundUser?.fname + " " + auth?.foundUser?.lname;

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    axios.get("/userprofile/" + user_id).then((res) => {
      const data = res.data[0];
      setUser(data);
    });
  }, []);

    // function handleClick(event) {
    //   navigate("/updateUser")
    // }
    
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
                <table>
                  <tbody>
                    <tr>
                      <td>Id:</td>
                      <td>{user_id}</td>
                    </tr>
                    <tr>
                      <td>Name:</td>
                      <td>
                        {user_name}
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td className="pass">{user.password} </td>
                    </tr>
                  </tbody>
                </table>
                <button className="button1">Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
