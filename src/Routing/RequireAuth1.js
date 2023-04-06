import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth1 = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.foundUser ? <Outlet /> :  <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth1;