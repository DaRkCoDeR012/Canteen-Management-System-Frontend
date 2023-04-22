import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile1 = () => {
  const { auth } = useAuth();
  const user_id = auth?.foundUser?._id;
  const user_name = auth?.foundUser?.name;
  const email = auth?.foundUser?.email;
  const role = auth?.foundUser?.role;
  const phone = auth?.foundUser?.phone_no;
  const college_id = auth?.foundUser?.college_id;
  const department = auth?.foundUser?.department;
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Id:</td>
            <td>{user_id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{user_name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>{role}</td>
          </tr>
          <tr>
            <td>Department:</td>
            <td>{department}</td>
          </tr>
          <tr>
            <td>College Id:</td>
            <td>{college_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile1;
