import React from 'react';
import axios from "../../api/axios";
import { useLocation } from "react-router-dom";
import "../Profile/profile.css";

function UpdateUser() {
 
    const location = useLocation();
    const user_id = location.state.name[0];
    const user_name = location.state.name[1];
    const user_email = location.state.name[4];
    const user_password = location.state.name[3];
    // console.log(data);
    
    // const [user, setUser] = React.useState([]);
    // setUser(data);
    
    // React.useEffect(() => {
    //     axios.get("/userprofile/"+user_id)
    //     .then((res)=>{
    //         const data = res.data[0];
    //         setUser(data);
    //     })
    //   },[]); 

    // function handleClick(event) {
    //   if(event.target.id === "UpdateUser"){
    //     setOption(<UpdateUser />);
    //   }
    // }
    
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
            <h3><i class="fa fa-id-card" aria-hidden="true"></i>    Profile</h3><hr/>
            <table >
                <tr>
                    <td>Id:</td>
                    <td>{user_id}</td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Name:</td>
                    <td>
                        <input type="text" placeHolder={user_name}/>
                        {/* {user_name} {user.lname} */}
                    </td>
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
                    <td>
                        <input type="text" placeHolder={user_email}/>
                    </td>
                    {/* <td>User Id:</td> */}
                </tr>
                <tr>
                    <td>Password:</td>
                    <td className="pass">
                        <input type="text" placeHolder={user_password}/> 
                     </td>
                    {/* <td><a ><i className="fa fa-eye" aria-hidden="true" ></i></a></td> */}
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

export default UpdateUser;
