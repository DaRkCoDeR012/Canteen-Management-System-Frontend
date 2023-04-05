import React from 'react';
import axios from '../../api/axios';
// import Dashboard from "../Dashboard/Dashboard";
// import FoodItem from "../FoodItems/FoodItems";
// import ADDFOOD from "../AddFood/ADDFOOD";
import { useLocation,useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {

    // const [isclicked,setIsClicked] = React.useState(false);
    // const navigate = useNavigate();
    const location = useLocation();
    // const [isActive, setIsActive] = React.useState("Dashboard");
    // const [option, setOption] = React.useState(<Dashboard />);
    const admin_id = location.state.name[1];
    const canteen_name = location.state.name[2];
    const cid = location.state.name[3];
    const admin_name = location.state.name[0];


    const [admin, setAdmin] = React.useState([]);

    React.useEffect(() => {
        axios.get("/adminprofile/"+admin_id)
        .then((res)=>{
            const data = res.data[0];
            // console.log(data);
            setAdmin(data);
        })
      },[]);

    // // console.log(location.state.name);
    // function logout(event){
    //     setIsClicked(true);
    //     setTimeout(()=>setIsClicked(false),1000);
    //     event.preventDefault();
    //     localStorage.clear();
    //     navigate("/admin");
    // };

    // function handleClick(event){
    //     setIsActive(event.target.id);
    //     if(event.target.id === "Dashboard"){
    //         setOption(<Dashboard />);
    //     }
    //     else if(event.target.id === "Orders"){
    //         setOption(<Order />);
    //     }
    //     else if(event.target.id === "Food Items"){
    //         setOption(<FoodItem />);
    //     }
    //     else if(event.target.id === "addfood"){
    //       setOption(<ADDFOOD />);
    //   }
    // };
      
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
            <h3>Profile</h3><hr/>
            <table >
                <tr>
                    <td>Id:</td>
                    <td>{admin_id}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>{admin_name}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Canteen Name:</td>
                    <td>{canteen_name}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Canteen Id:</td>
                    <td>{cid}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{admin.email}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{admin.password}  <a><i class="bi bi-eye-slash-fill"></i></a></td>
                    {/* <td>User Id:</td> */}
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

export default Profile
