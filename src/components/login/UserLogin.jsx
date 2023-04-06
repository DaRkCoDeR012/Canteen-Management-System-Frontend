import React from "react";
import axios from "../../api/axios"
import useAuth from "../../hooks/useAuth";
import "./loginstyles.css";

import {useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const {setAuth}  = useAuth();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const submit = async(event) => {
    event.preventDefault();
    try {
    setFormErrors(validate(user));
    if (Object.keys(formErrors).length === 0 && isValid) {
      setIsValid(false);
      const response = await axios.post("/login", user);
      if(response?.data?.foundUser){
      const foundUser = response?.data?.foundUser;
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.role;
      setAuth({foundUser, role, accessToken});
      console.log(accessToken);
      response?.data?.role && navigate("/userdashboard");
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
  const adminRegister = ()=>{
    navigate("/adminRegister");
  }
 const change = <i className="fa fa-eye-slash" aria-hidden="true" ></i>
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <form className="login">
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        {/* <div className="form-group"> */}

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
      <div className=" form-floating">
        <input
          onChange={handleChange}
          name="password"
          type={passwordShown ? "text" : "password"}
          className="form-control "
          id="floatingPassword"
          placeholder="Password"
          value={user.password}
        /><p>{formErrors.password}</p>
        <label htmlFor="floatingPassword" >Password</label>
      </div>
      <div class="row justify-content-end">
    <div class="col-6">
        <a className="btn2 " onClick={togglePassword}>
          <p>
        {passwordShown ? <i className="fa fa-eye-slash"aria-hidden="true" ></i> :<i className="fa fa-eye" aria-hidden="true" ></i> }      {passwordShown ? "Hide password" : "Show password"}       </p>
      </a>
      </div>
      </div>
        
        {/* <p>{formErrors.password}</p>
        
        <label htmlFor="floatingPassword" >Password</label> */}
        
      {/* </div> */}
      <br />
      <button className="w-100 btn btn-lg" onClick={submit}>
        Sign in
      </button>
      <hr />
<<<<<<< HEAD:src/components/login/Login.jsx
      {isHome ? 
=======
>>>>>>> 3cef26ed5b045219e3b231e169699b02497034fa:src/components/login/UserLogin.jsx
      <button 
      className="w-100 btn btn-lg"
      onClick={register}
      >
        Register
      </button>
<<<<<<< HEAD:src/components/login/Login.jsx
      :<button 
      className="w-100 btn btn-lg"
      onClick={adminRegister}
      >
        Register
      </button>}
=======
>>>>>>> 3cef26ed5b045219e3b231e169699b02497034fa:src/components/login/UserLogin.jsx
    </form>
  );
}

export default UserLogin;
