import React from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const history = useNavigate();
  const [user, setUser] = React.useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    department: "",
    college_id: "",
    password: "",
    confirmpass: "",
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
        name: "",
        phone: "",
        email: "",
        role: "",
        department: "",
        college_id: "",
        password: "",
        confirmpass: "",
      });
    }
  };

  const validate = (user) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!user.name) {
      errors.fname = "Name is required!";
      setIsValid(false);
    }
    if (!user.phone) {
      errors.lname = "Phone no is required!";
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
    if (!user.role) {
      errors.role = "Role is required!";
      setIsValid(false);
    }
    if (!user.department) {
      errors.department = "Department is required!";
      setIsValid(false);
    }
    if (!user.college_id) {
      errors.college_id = "College id is required!";
      setIsValid(false);
    }
    if (!user.confirmpass) {
      errors.confirmpass = "Confirm password is required!";
      setIsValid(false);
    } else if (user.password !== user.confirmpass) {
      errors.confirmpass = "Password and Confirm password should be same";
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
            value={user.fname}
          />
          <p>{formErrors.fname}</p>
          <label htmlFor="floatingInput">Name</label>
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
            name="phone"
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="phone no"
            value={user.phone}
          />
          <p>{formErrors.phone}</p>
          <label htmlFor="floatingInput">Phone no</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="role"
            type="text"
            className="form-control"
            id="floatingrole"
            placeholder="role"
            value={user.role}
          />
          <p>{formErrors.role}</p>
          <label htmlFor="floatingcollege_id">role</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="department"
            type="department"
            className="form-control"
            id="floatingdepartment"
            placeholder="department"
            value={user.department}
          />
          <p>{formErrors.department}</p>
          <label htmlFor="floatingdepartment">Department</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="college_id"
            type="college_id"
            className="form-control"
            id="floatingcollege_id"
            placeholder="college_id"
            value={user.college_id}
          />
          <p>{formErrors.college_id}</p>
          <label htmlFor="floatingcollege_id">college_id</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="password"
            type={passwordShown ? "text" : "password"}
            className="form-control"
            id="floatingpassword"
            placeholder="password"
            value={user.password}
          />
          <p>{formErrors.password}</p>
          <label htmlFor="floatingpassword">Password</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            name="confirmpass"
            type={passwordShown ? "text" : "password"}
            className="form-control"
            id="floatingpassword"
            placeholder="confirm password"
            value={user.confirmpass}
          />
          <p>{formErrors.confirmpass}</p>
          <label htmlFor="floatingcollege_id">Confirm password</label>
        </div>
        <div className="row justify-content-end">
    <div className="col-6">
        <a className="btn2 " onClick={togglePassword}>
          <p>
        {passwordShown ? <i className="fa fa-eye-slash"aria-hidden="true" ></i> :<i className="fa fa-eye" aria-hidden="true" ></i> }      {passwordShown ? "Hide password" : "Show password"}       </p>
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
