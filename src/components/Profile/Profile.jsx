import React from "react";
import useAuth from "../../hooks/useAuth";
import Update from '../Update/UpdateUser'
import "./profile.css";

function Profile() {
  const { auth } = useAuth();
  const admin_id = auth?.foundAdmin?._id;
  const admin_email = auth?.foundAdmin?.email;
  const admin_name = auth?.foundAdmin?.name;
  const canteen_name = auth?.foundAdmin?.canteen_name;
  const canteen_id = auth?.canteen?._id;
  const [isActive, setIsActive] = React.useState("Update");

  return (
    <div>
      <div className="col-12 profile">
        <div className="card mb-3 menucard1" style={{ maxWidth: "1040px" }}>
          <div className="card1 row">
            <div className="col-md-12 cardbod">
              <div className="card-body">
                <h3>
                  <i className="fa fa-user-circl2" aria-hidden="true"></i>{" "}
                  Profile
                </h3>
                <hr />
                <table>
                  <tbody>
                    <tr>
                      <td>Id:</td>
                      <td>{admin_id}</td>
                    </tr>
                    <tr>
                      <td>Name:</td>
                      <td>{admin_name}</td>
                    </tr>
                    <tr>
                      <td>Canteen Name:</td>
                      <td>{canteen_name}</td>
                    </tr>
                    <tr>
                      <td>Canteen Id:</td>
                      <td>{canteen_id}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{admin_email}</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className={isActive === "Update" ? "nav-link" : "nav-link"}
                  id="Update"
                  className="button1"
                >
                  <Update />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
