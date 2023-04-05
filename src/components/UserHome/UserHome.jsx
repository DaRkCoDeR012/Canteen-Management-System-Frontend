import React from "react";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import UserProfile from "../Profile/UserProfile";
import UserDashBoard from "../UserDashboard/DashBoard";
import MyOrders from "../Orders/MyOrders";
import axios from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./userhome.css";

function UserHome(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("Menu");
  const canteen= location.state.canteen_name
  const userid = location.state.name[1];
  const username = location.state.name[0];
  // console.log(canteen);
  const [option, setOption] = React.useState(<Menu name={canteen} />);
  

  function logout(event) {
    event.preventDefault();
    localStorage.clear();
    axios.delete("/cart");
    navigate("/");
  }

  function handleClick(event) {
    setIsActive(event.target.id);
    if (event.target.id === "Menu") {
      setOption(<Menu/>);
    } else if (event.target.id === "MyOrders") {
      setOption(<MyOrders id={userid} />);
    }
    else if (event.target.id === "Profile") {
      setOption(<UserProfile />)
    }else if (event.target.id === "DashBoard") {
      setOption(<UserDashBoard />);
    } else if (event.target.id === "Cart") {
      setOption(<Cart id={userid} username={username}/>);
    }
  }

  function handleClick2(event) {
    event.preventDefault();
    navigate("/userdashboard",
    {
      state:{
        name:[
          username,userid
      ]
      }
    })
  }

  return (
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg bg-body-tertiary usernav">
          <div className="container-fluid">
            <a id="Profile" className={
                      isActive === "Profile" ? "nav-link active" : "navbar-brand navname" } onClick={handleClick}>
              {username}
            </a>
            {/* <a className="navbar-brand navname" href="/userhome">
              {canteen}
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className={
                      isActive === "Menu" ? "nav-link active" : "nav-link"
                    }
                    id="Menu"
                    onClick={handleClick}
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      isActive === "MyOrders" ? "nav-link active" : "nav-link"
                    }
                    id="MyOrders"
                    onClick={handleClick}
                  >
                    My Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      isActive === "Cart" ? "nav-link active" : "nav-link"
                    }
                    id="Cart"
                    onClick={handleClick}
                  >
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="userhomebg"><a className="nav-link" onClick={handleClick2}><h2>{canteen}</h2></a></div>
      <div className="col-12 userhomebg">{option}</div>
    </div>
  );
}

export default UserHome;
