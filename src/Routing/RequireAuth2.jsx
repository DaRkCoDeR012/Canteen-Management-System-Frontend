import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth2 = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.foundAdmin ? <Outlet /> : <Navigate to="/admin" state={{ from: location }} replace />
    );
}

export default RequireAuth2;