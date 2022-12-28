import AuthContext from "./context/AuthProvider";
import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

const ProtectedRoutes = () => {
    const { user } = useContext(AuthContext);

    return(
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes;