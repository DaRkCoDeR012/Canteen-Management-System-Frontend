import React from "react";
import Order from "../Orders/Order";
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import FoodItem from "../FoodItems/FoodItems";
import ADDFOOD from "../AddFood/ADDFOOD";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useLogout1 from "../../hooks/useLogout1";
import "./adminpan.css";

function AdminPanel() {
  const [isclicked, setIsClicked] = React.useState(false);
  const { auth } = useAuth();
  const Logout = useLogout1();
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState("Dashboard");
  const [option, setOption] = React.useState(<Dashboard />);
  const canteen_name = auth?.foundAdmin?.canteen_name;
  const logout = async () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
    await Logout();
    navigate("/admin");
  };

  function handleClick(event) {
    setIsActive(event.target.id);
    if (event.target.id === "Dashboard") {
      setOption(<Dashboard />);
    } else if (event.target.id === "Profile") {
      setOption(<Profile />);
    } else if (event.target.id === "Orders") {
      setOption(<Order />);
    } else if (event.target.id === "Food Items") {
      setOption(<FoodItem />);
    } else if (event.target.id === "addfood") {
      setOption(<ADDFOOD />);
    }
  }

  return (
    <div className="row">
      <div className="col-12 sticky-top button1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a
              className={
                isActive === "Profile"
                  ? "navbar-brand navname active"
                  : "navbar-brand navname"
              }
              id="Profile"
              onClick={handleClick}
            >
              <i className="fa fa-user"></i>
              {" " + canteen_name}
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
              <ul className="navbar-nav ms-auto usernav">
                <li className="nav-item">
                  <a
                    id="Dashboard"
                    className={
                      isActive === "Dashboard" ? "nav-link active" : "nav-link"
                    }
                    onClick={handleClick}
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="Orders"
                    className={
                      isActive === "Orders" ? "nav-link active" : "nav-link"
                    }
                    onClick={handleClick}
                  >
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="Food Items"
                    className={
                      isActive === "Food Items" ? "nav-link active" : "nav-link"
                    }
                    onClick={handleClick}
                  >
                    Food Items
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="addfood"
                    className={
                      isActive === "addfood" ? "nav-link active" : "nav-link"
                    }
                    onClick={handleClick}
                  >
                    Add Food
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      isActive === "Dashboard" ? "nav-link active" : "nav-link"
                    }
                    onClick={logout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 adminpanelbg">{option}</div>
    </div>
  );
}

export default AdminPanel;
