import React from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const history = useNavigate();
  const [admin, setAdmin] = React.useState({
    name: "",
    lcanteen_name: "",
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

  const submit = (event) => {
    event.preventDefault();
    setFormErrors(validate(admin));
    if (Object.keys(formErrors).length === 0 && isValid) {
      setIsValid(false);
      axios.post("/adminregister", admin).then((res) => {
        if (res.data === "Admin already Exist") {
          alert(res.data);
          window.location.reload();
        } else {
          alert(res.data);
          history("/admin");
        }
      });
      setAdmin({
        name: "",
        canteen_name: "",
        email: "",
        password: "",
      });
    }
  };

  const validate = (admin) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!admin.name) {
      errors.name = "Name is required!";
      setIsValid(false);
    }
    if (!admin.canteen_name) {
      errors.canteen_name = "Canteen Name is required!";
      setIsValid(false);
    }
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
    <div className="parent register">
      <form className="registerform">
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            value={admin.name}
          />
          <p>{formErrors.fname}</p>
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="canteen_name"
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Canteen Name"
            value={admin.canteen_name}
          />
          <p>{formErrors.canteen_name}</p>
          <label htmlFor="floatingInput">Canteen Name</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={admin.email}
          />
          <p>{formErrors.email}</p>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="password"
            type={passwordShown ? "text" : "password"}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={admin.password}
          />
          <p>{formErrors.password}</p>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="row justify-content-end">
            <div className="col-6">
                <a className="btn2 " onClick={togglePassword}>
                    <p>{passwordShown ? <i className="fa fa-eye-slash"aria-hidden="true" ></i> :<i className="fa fa-eye" aria-hidden="true" ></i> }      {passwordShown ? "Hide password" : "Show password"}</p>
                </a>
            </div>
        </div>
        <button className="w-100 btn btn-lg registerbtn" onClick={submit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
