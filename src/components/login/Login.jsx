import React from "react";
import axios from "../../api/axios"
import "./loginstyles.css";

import {useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(true);
  const isHome = props.isHome;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setFormErrors(validate(user));
    if (Object.keys(formErrors).length === 0 && isValid) {
      setIsValid(false);
      isHome
        ? axios.post("/login", user).then((res) => {
            if (res.data.message === "Login Successfull") {
              localStorage.setItem("usertoken", res.data.tkn);
              alert(res.data.message);
              navigate("/userdashboard", {
                state: {
                  name: res.data.name,
                },
              });
              window.location.reload();
            } else {
              alert(res.data);
              window.location.reload();
            }
          })
        : axios.post("http://localhost:8080/admin", user).then((res) => {
            if (res.data.message === "Login Successfull") {
              localStorage.setItem("admintoken", res.data.tkn);
              alert(res.data.message);
              navigate("/adminpanel",{
              state: {
                name:  res.data.name
              }
            });
                // console.log();
              window.location.reload();
            } else {
              alert(res.data);
              window.location.reload();
            }
            window.location.reload();
          });
      setFormErrors({});
    }
  };

  const validate = (user) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!user.email) {
      errors.email = "Email is required!";
      setIsValid(false);
    } else if (!regex.test(user.email)) {
      errors.email = "Enter a valid Email";
      setIsValid(false);
    }
    if (!user.password) {
      errors.password = "Password is required!";
      setIsValid(false);
    }
    return errors;
  };

  const register = ()=>{
    navigate("/register");
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <form className="login">
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input
          onChange={handleChange}
          name="email" 
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={user.email}
          />
        <p>{formErrors.email}</p>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating form-group">
        <input
          onChange={handleChange}
          name="password"
          type={passwordShown ? "text" : "password"}
          className="form-control col-4"
          id="floatingPassword"
          placeholder="Password"
          value={user.password}
        /><a className="btn btn1" onClick={togglePassword}>
        <i className="fa fa-eye" aria-hidden="true" ></i>
      </a>
        <p>{formErrors.password}</p>
        
        <label htmlFor="floatingPassword" >Password</label>
        
      </div>
      <br />
      <button className="w-100 btn btn-lg" onClick={submit}>
        Sign in
      </button>
      {isHome && <hr />}
      {isHome &&<button 
      className="w-100 btn btn-lg"
      onClick={register}
      >
        Register
      </button>}
    </form>
  );
}

export default Login;
