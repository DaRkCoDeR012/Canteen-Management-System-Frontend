import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Canteen1 from "../Menu/Canteen1";
import Cart from "../Cart/Cart";
import UserProfile from "../Profile/UserProfile";
import UserDashBoard from "../UserDashboard/DashBoard";
import MyOrders from "../Orders/MyOrders";
import axios from "../../api/axios";
import Asd from "./Asd";
import useAuth from "../../hooks/useAuth";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CanteenHome = () => {
  const Navigate = useNavigate();
  const name = useParams().cname;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("Menu");
  const canteens = auth?.canteen;
  const c = canteens.filter((canteen) => {
    return canteen.canteen_name === name;
  });
  const canteen = c[0].canteen_name;
  const cid = c[0]._id;
  const userid = auth?.foundUser?._id;
  const username = auth?.foundUser?.name;

  const [option, setOption] = React.useState(<Menu name={canteen} cid={cid} />);

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
      setOption(<Menu name={canteen} cid={cid} />);
    } else if (event.target.id === "MyOrders") {
      setOption(<MyOrders id={userid} cid={cid} />);
    } else if (event.target.id === "Profile") {
      setOption(<UserProfile />);
    } else if (event.target.id === "DashBoard") {
      setOption(<UserDashBoard />);
    }
  }

  function handleClick2(event) {
    event.preventDefault();
    navigate("/userdashboard");
  }

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="row">
      <div className="col-12 sticky-top usernavb">
        <nav className="navbar shadow-lg navbar-expand-lg usernav">
          <div className="container-fluid">
            <a
              id="Profile"
              className={
                isActive === "Profile"
                  ? "nav-link active"
                  : "navbar-brand navname"
              }
              onClick={handleClick}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              {" " + username}
            </a>
            <div className="userhomename">
              <a className="nav-link" onClick={handleClick2}>
                <h2>{canteen}</h2>
              </a>
            </div>
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
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <div className="Cart">
            <Cart id={userid} username={username} cid={cid} canteen={canteen} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="row">
        <div className="col-2 text-white" style={{ padding: "0", borderRight:"solid 2px #9BA4B5",borderBottom:"solid 2px #9BA4B5"}}>
          <h2 style={{color:"#000"}}>Canteens</h2>
          {auth?.canteen.map((canteen) => {
            return (
              <div className="kkk">
              <button
                className={name !== canteen.canteen_name ? "btn ads card-title1 mt-2 buttonx" : "btn ads card-title1 mt-2 buttonx ba"}
                key={canteen._id}
                name={canteen.canteen_name}
                onClick={(e) => {
                  Navigate(`/userhome/${e.target.name}`);
                  setOption(<Menu name={e.target.name} cid={e.target.key} />);
                }}
                style={{ width: "80%", marginLeft:"2rem"}}
              >
                {canteen.canteen_name}
              </button></div>
            );
          })}
        </div>
        <div className="col-10">{option}</div>
      </div>
    </div>
  );
};

export default CanteenHome;
