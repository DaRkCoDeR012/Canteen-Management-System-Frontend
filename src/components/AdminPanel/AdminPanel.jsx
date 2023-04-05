import React from "react";
import Order from "../Orders/Order";
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import FoodItem from "../FoodItems/FoodItems";
import ADDFOOD from "../AddFood/ADDFOOD";
import { useLocation,useNavigate } from "react-router-dom";
import "./adminpan.css";

function AdminPanel(){

    const [isclicked,setIsClicked] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isActive, setIsActive] = React.useState("Dashboard");
    const [option, setOption] = React.useState(<Dashboard />);
    // const canteen_id = location.state.name[3];
    const canteen_name = location.state.name[2];
    // console.log(location.state.name);
    function logout(event){
        setIsClicked(true);
        setTimeout(()=>setIsClicked(false),1000);
        event.preventDefault();
        localStorage.clear();
        navigate("/admin");
    };
    
    function handleClick(event){
      setIsActive(event.target.id);
      if(event.target.id === "Dashboard"){
        setOption(<Dashboard />);
      }
      else if (event.target.id === "Profile") {
        setOption(<Profile />)
      }
        else if(event.target.id === "Orders"){
            setOption(<Order />);
        }
        else if(event.target.id === "Food Items"){
            setOption(<FoodItem />);
        }
        else if(event.target.id === "addfood"){
          setOption(<ADDFOOD />);
      }
    };

    return(<div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className={
         isActive === "Profile" ? "nav-link active" : "navbar-brand navname" } id="Profile" onClick={handleClick} >{canteen_name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto usernav">
          <li className="nav-item">
            <a id="Dashboard" className={isActive==="Dashboard"? "nav-link active": "nav-link"} onClick={handleClick}>Dashboard</a>
          </li>
          <li className="nav-item">
            <a id="Orders" className={isActive==="Orders"? "nav-link active": "nav-link"} onClick={handleClick}>Orders</a>
          </li>
          <li className="nav-item">
            <a id="Food Items" className={isActive==="Food Items"? "nav-link active": "nav-link"} onClick={handleClick}>Food Items</a>
          </li>
          <li className="nav-item">
            <a id="addfood" className={isActive==="addfood"? "nav-link active": "nav-link"} onClick={handleClick}>Add Food</a>
          </li>
          <li className="nav-item">
            <a className={isActive==="Dashboard"? "nav-link active": "nav-link"} onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="col-12 adminpanelbg">{option}</div></div>);

  //   return(<div className="parent"><div className="info">
  //   <div className="infoitem1">Admin</div>
  //   <div className={isclicked ? "infoitem2 pressed" : "infoitem2"} onClick={logout}>Logout</div>
  // </div>
  // <div className="UserHome">
  //   <ul className="NavMenu">
  //     <button className={isActive==="Dashboard"?"button1 active":"button1"} onClick={handleClick}>
  //       <li id="Dashboard" className="NavItem">Dashboard</li>
  //     </button>
  //     <button className={isActive==="Orders"?"button1 active":"button1"}  onClick={handleClick}>
  //       <li id="Orders" className="NavItem">Current Orders</li>
  //     </button>
  //     <button className={isActive==="Food Items"?"button1 active":"button1"}  onClick={handleClick}>
  //       <li id="Food Items" className="NavItem">Food Items</li>
  //     </button>
  //     <button className={isActive==="addfood"?"button1 active":"button1"}  onClick={handleClick}>
  //       <li id="addfood" className="NavItem">Add Food</li>
  //     </button>
  //   </ul>
  //   {option}
  // </div>
  // </div>);
}

export default AdminPanel;