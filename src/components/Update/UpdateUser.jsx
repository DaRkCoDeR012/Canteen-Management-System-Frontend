import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import "../Profile/profile.css";
import { Modal, Button } from "react-bootstrap";

function UpdateUser(props) {
  const { auth } = useAuth();

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user_id = auth?.foundUser?._id;
  const admin_id = auth?.foundAdmin?._id;
  const [formErrors, setFormErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(true);
  const [user, setUser] = React.useState({
    npassword: "",
    cpassword: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setFormErrors(validate(user));
    if (Object.keys(formErrors).length === 0 && isValid) {
      setIsValid(false);
      if (auth?.foundAdmin) {
        axios.post("/updateAdmin/" + admin_id, user).then((res) => {
          if (res) {
            if (res.data === "User not found") {
              alert(res.data);
            } else {
              alert(res.data);
              window.location.reload();
            }
          }
        });
      }else if (auth?.foundUser) {
        axios.post("/updateUser/" + user_id, user).then((res) => {
          if (res) {
            if (res.data === "User not found") {
              alert(res.data);
            } else {
              alert(res.data)
              window.location.reload();
            }
          }
        });
      }
    }
  };

  const validate = (user) => {
    const errors = {};

    if (!user.password || !user.npassword || !user.cpassword) {
      errors.password = "Password is required!";
      setIsValid(false);
    } else if (user.npassword !== user.cpassword) {
      errors.password = "New password and confirm password does not match";
      setIsValid(false);
    }else if (user.password === user.npassword) {
      errors.password = "Password and new password cannot be same";
      setIsValid(false);
    }
    return errors;
  };

  return (
    <div>
      <div variant="" onClick={handleShow}>
        Update Password
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-12 profile">
            <div className="card2 menucard2">
              <div className="card1 row">
                <div className="col cardbod">
                  <div className="card-body">
                    <table>
                      <tbody>
                        <tr>
                          <td>Id:</td>
                          <td>{user_id || admin_id}</td>
                        </tr>
                        <tr>
                          <td>Old Password:</td>
                          <td>
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              placeholder="Enter old password"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>New Password:</td>
                          <td>
                            <input
                              type="password"
                              name="npassword"
                              onChange={handleChange}
                              placeholder="Enter new password"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Confirm Password:</td>
                          <td className="pass">
                            <input
                              type="password"
                              name="cpassword"
                              onChange={handleChange}
                              placeholder="Confirm Password"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateUser;
