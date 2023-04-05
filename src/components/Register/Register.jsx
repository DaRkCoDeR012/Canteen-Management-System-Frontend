import React from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const history = useNavigate();
  const [user, setUser] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmpass: "",
  });

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

  const submit = (event) => {
    event.preventDefault();
    setFormErrors(validate(user));
    if (Object.keys(formErrors).length === 0 && isValid) {
      setIsValid(false);
      axios.post("/register", user).then((res) => {
        if (res.data === "User already Exist") {
          alert(res.data);
          window.location.reload();
        } else {
          alert(res.data);
          history("/");
        }
      });
      setUser({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmpass: "",
      });
    }
  };

  const validate = (user) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!user.fname) {
      errors.fname = "First Name is required!";
      setIsValid(false);
    }
    if (!user.lname) {
      errors.lname = "Last Name is required!";
      setIsValid(false);
    }
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
    if (!user.confirmpass) {
      errors.confirmpass = "Confirm Password is required!";
      setIsValid(false);
    } else if (user.password !== user.confirmpass) {
      errors.confirmpass = "Password and Confirm Password should be same";
      setIsValid(false);
    }
    return errors;
  };

  return (
    <div className="parent register">
      <form className="registerform">
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
          <input
            onChange={handleChange}
            name="fname"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="First Name"
            value={user.fname}
          />
          <p>{formErrors.fname}</p>
          <label htmlFor="floatingInput">First Name</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="lname"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Last Name"
            value={user.lname}
          />
          <p>{formErrors.lname}</p>
          <label htmlFor="floatingInput">Last Name</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={user.email}
          />
          <p>{formErrors.email}</p>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={user.password}
          />
          <p>{formErrors.password}</p>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="confirmpass"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Confirm Password"
            value={user.confirmpass}
          />
          <p>{formErrors.confirmpass}</p>
          <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
        <button className="w-100 btn btn-lg registerbtn" onClick={submit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
