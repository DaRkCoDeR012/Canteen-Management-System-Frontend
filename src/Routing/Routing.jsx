import React from "react";
import Homepage from "../components/Homepage/Homepage";
import Register from "../components/Register/Register";
import AdminRegister from "../components/Register/AdminRegister";
import UserDashBoard from "../components/UserDashboard/DashBoard";
import UserHome from "../components/UserHome/UserHome";
import Admin from "../components/Admin/Admin";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth1 from "./RequireAuth1";
import RequireAuth2 from "./RequireAuth2";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthProvider";
import PersistLogin from "../components/PersistLogin";
import PersistLogin1 from "../components/PersistentLogin1";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/adminregister" element={<AdminRegister />} />

              <Route element={<PersistLogin />}>
                <Route element={<RequireAuth1 />}>
                  <Route exact path="/userhome" element={<UserHome />} />
                  <Route
                    exact
                    path="/userdashboard"
                    element={<UserDashBoard />}
                  />
                </Route>
              </Route>

              <Route element={<PersistLogin1 />}>
                <Route element={<RequireAuth2 />}>
                  <Route exact path="/adminpanel" element={<AdminPanel />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default Routing;
