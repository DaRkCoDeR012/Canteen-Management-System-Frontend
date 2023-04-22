import React from "react";
import Menu from "../Menu/Menu";
import Canteen1 from "../Menu/Canteen1";
import Cart from "../Cart/Cart";
import UserProfile from "../Profile/UserProfile";
import UserDashBoard from "../UserDashboard/DashBoard";
import MyOrders from "../Orders/MyOrders";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation, useNavigate } from "react-router-dom";
import "./userhome.css";

function UserHome(props) {
  const location = useLocation();
  const {auth} = useAuth();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("Menu");
  const canteen= location.state.name;
  const cid= location.state.cid;
  const userid = auth?.foundUser?._id;
  const username = auth?.foundUser?.name;
  const [option, setOption] = React.useState(<Menu name={canteen} cid={cid}/>);
  
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function logout(event) {
    event.preventDefault();
    localStorage.clear();
    axios.delete("/cart");
    navigate("/");
  }

  function handleClick(event) {
    setIsActive(event.target.id);
    if (event.target.id === "Menu") {
      setOption(<Menu name={canteen} cid={cid}/>);
    } else if (event.target.id === "MyOrders") {
      setOption(<MyOrders id={userid} cid={cid}/>);
    }
    else if (event.target.id === "Profile") {
      setOption(<UserProfile />)
    }else if (event.target.id === "DashBoard") {
      setOption(<UserDashBoard />);
    }
  }

  function handleClick2(event) {
    event.preventDefault();
    navigate("/userdashboard")
  }

  return (
    <div className="row">
      <div className="col-12 sticky-top button1 ">
        <nav className="navbar shadow-lg navbar-expand-lg bg-body-secondary usernav">
          <div className="container-fluid">
            <a id="Profile" className={
                      isActive === "Profile" ? "nav-link active" : "navbar-brand navname" } onClick={handleClick}>
              <i className="fa fa-user" aria-hidden="true"></i>{" "+username}
            </a>
            <div className="userhomename"><a className="nav-link" onClick={handleClick2}><h2>{canteen}</h2></a></div>
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
                    onClick={handleShow}
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
      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header><hr/>
        <Offcanvas.Body>
            <div className="Cart"><Cart id={userid} username={username} cid={cid} canteen={canteen}/></div>
        </Offcanvas.Body>

      </Offcanvas>
      <div className="plm">
        <div className=" col-2 h-100 userhomebg left-section bg-dark" ><Canteen1 name={canteen} cid={cid}/></div>
        <div className="col-10  right-section userhomebg" >{option}</div>
      </div>
    </div>
  );
}

export default UserHome;
