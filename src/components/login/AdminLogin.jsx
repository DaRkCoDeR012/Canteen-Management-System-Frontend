import React from "react";
import axios from "../../api/axios"
import useAuth from "../../hooks/useAuth";
import "./loginstyles.css";

import {useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const {setAuth}  = useAuth();

    const [admin, setAdmin] = React.useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdmin((prevAdmin) => {
      return {
        ...prevAdmin,
        [name]: value,
      };
    });
  };

  const submit = async(event) => {
    event.preventDefault();
    try {
    setFormErrors(validate(admin));
    if (Object.keys(formErrors).length === 0 && isValid) {
    setIsValid(false);
      const response = await axios.post("/admin", admin)
      if(response?.data?.admin){
      const foundAdmin = response?.data?.admin;
      const accessToken = response?.data?.accessToken;
      const canteen = response?.data?.canteen[0];
      const role = response?.data?.role;
      setAuth({foundAdmin, role, accessToken, canteen});
      response?.data?.role && navigate("/adminpanel");
      setFormErrors({});
      }
      else{
        alert(response?.data);
        window.location.reload();
      }
      }
    }
    catch (err){
      console.log(err);
    }
  };

  const validate = (admin) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    if (!admin.email) {
      errors.email = "Email is required!";
      setIsValid(false);
    } else if (!regex.test(admin.email)) {
      errors.email = "Enter a valid Email";
      setIsValid(false);
    }
    if (!admin.password) {
      errors.password = "Password is required!";
      setIsValid(false);
    }
    return errors;
  };

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
          value={admin.email}
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
          value={admin.password}
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
    </form>
  );
}

export default AdminLogin;