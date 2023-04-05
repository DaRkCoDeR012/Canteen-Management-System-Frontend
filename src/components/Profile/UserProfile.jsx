import React from 'react';
import axios from "axios";
import CryptoJS from "crypto-js";
// import Dashboard from "../Dashboard/Dashboard";
// import FoodItem from "../FoodItems/FoodItems";
// import ADDFOOD from "../AddFood/ADDFOOD";
import { useLocation,useNavigate } from "react-router-dom";
import "./profile.css";

function UserProfile() {
 
    // const [isclicked,setIsClicked] = React.useState(false);
    // const navigate = useNavigate();
    const location = useLocation();
    // const [isActive, setIsActive] = React.useState("Dashboard");
    // const [option, setOption] = React.useState(<Dashboard />);
    const user_id = location.state.name[1];
    // const canteen_name = location.state.name[2];
    // const cid = location.state.name[3];
    const user_name = location.state.name[0];


    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        axios.get("/userprofile/"+user_id)
        .then((res)=>{
            const data = res.data[0];
            setUser(data);
        })
      },[]);    

  return (
    <div>
    <div className="col-12 profile"> 
    <div className="card mb-3 menucard1" style={{ maxWidth: "1040px" }}>
      <div className="card1 row">
        {/* <div className="col-md-4 imgdiv">
          <img src="https://cdn-icons-png.flaticon.com/128/737/737967.png" className="img-fluid rounded-start" alt="..." />
        </div> */}
        <div className="col-md-12 cardbod">
          <div className="card-body">
            <h3><i class="fa fa-user-circle" aria-hidden="true"></i>    Profile</h3><hr/>
            <table >
                <tr>
                    <td>Id:</td>
                    <td>{user_id}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{user_name} {user.lname}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                {/* <tr>
                    <td>Canteen Name:</td>
                    <td>{user_name}</td> */}
                    {/* <td>User Id:</td> */}
                {/* </tr> */}
                {/* <tr>
                    <td>Canteen Id:</td>
                    <td>{cid}</td> */}
                    {/* <td>User Id:</td> */}
                {/* </tr> */}
                <tr>
                    <td>Email:</td>
                    <td>{user.email}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Password:</td>
                    <td className="pass">{user.password}  </td>
                    <td><a ><i className="fa fa-eye" aria-hidden="true" ></i></a></td>
                </tr>
            </table>
            {/* <h3 className="card-title">User Id: {user_id}</h3>
            <hr />
            <h4 className="card-text"> */}
                {/* bcjjclkn.mc nnkck.c.mnk.nknwmd m wm m.nmq m xkxnk kqndknwmxmmnnknwm mwqnkwqk wqnkdnknxwnklnk ckwlqndkln qwklnkqldnk c necklenklcn  clnkwlfkwnkwk */}
                {/* User Name: {user_name}
            </h4>
            <h4 className="card-text">
                Canteen Name: {canteen_name}
            </h4> */}
            {/* <div className="added"><i onClick={minus} className="fa-solid fa-minus"></i><span>{count}</span><i onClick={add} className="fa-solid fa-plus"></i></div> */}
            <button className="button1">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default UserProfile;
