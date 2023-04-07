import React from 'react';
import axios from '../../api/axios';
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import "./profile.css";

function Profile() {

    const {auth} = useAuth();
    const admin_id = auth?.foundAdmin?._id;
    const canteen_name = auth?.foundAdmin?.canteen_name;

    const [admin, setAdmin] = React.useState([]);

    React.useEffect(() => {
        axios.get("/adminprofile/"+admin_id)
        .then((res)=>{
            const data = res.data;
            setAdmin(data);
        })
      },[]);

  return (
    <div>
    <div className="col-12 profile"> 
    <div className="card mb-3 menucard1" style={{ maxWidth: "1040px" }}>
      <div className="card1 row">
        <div className="col-md-12 cardbod">
          <div className="card-body">
            <h3><i className="fa fa-id-card" aria-hidden="true"></i>    Profile</h3><hr/>
            <table >
              <tbody>
                <tr>
                    <td>Id:</td>
                    <td>{admin_id}</td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{admin.name}</td>
                </tr>
                <tr>
                    <td>Canteen Name:</td>
                    <td>{canteen_name}</td>
                </tr>
                <tr>
                    <td>Canteen Id:</td>
                    <td>{admin.canteen_id}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{admin.email}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{admin.password}</td>
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
  )
}

export default Profile
