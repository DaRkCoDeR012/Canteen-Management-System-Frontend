import React from "react";
import Menu from "../Menu/Menu";
import Canteen from "../Menu/Canteen.jsx";
import Cart from "../Cart/Cart";
import UserProfile from "../Profile/UserProfile";
import OrderDash from "../Orders/OrderDash";
import axios from "../../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./userhome.css";

function DashBoard() {
  const location = useLocation();
  const {auth} = useAuth();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("Canteen");
  const [option, setOption] = React.useState(<Canteen />);
  const userid = auth?.foundUser?._id;
  const username = auth?.foundUser?.fname + " " +auth?.foundUser?.lname;

  function logout(event) {
    event.preventDefault();
    localStorage.clear();
    axios.delete("/cart");
    navigate("/");
  }

  function handleClick(event) {
    setIsActive(event.target.id);
    if (event.target.id === "Canteen") {
      setOption(<Canteen/>);
    }
    else if (event.target.id === "Profile") {
      setOption(<UserProfile />)
    } else if (event.target.id === "MyOrders") {
      setOption(<OrderDash id={userid} />);
    // } else if (event.target.id === "Cart") {
    //   setOption(<Cart id={userid} username={username}/>);
    }
  }

  return (
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg bg-body-tertiary usernav">
          <div className="container-fluid">
            <a id="Profile" className={
                      isActive === "Profile" ? "navbar-brand navname active" : "navbar-brand navname" } onClick={handleClick}>
              {username}
            </a>
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
                      isActive === "Canteen" ? "nav-link active" : "nav-link"
                    }
                    id="Canteen"
                    onClick={handleClick}
                  >
                    Canteen
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
                {/* <li className="nav-item">
                  <a
                    className={
                      isActive === "Cart" ? "nav-link active" : "nav-link"
                    }
                    id="Cart"
                    onClick={handleClick}
                  >
                    Cart
                  </a>
                </li> */}
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
      <div className="col-12 userhomebg">{option}</div>
    </div>
  );
}

export default DashBoard;
