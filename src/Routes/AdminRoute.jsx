import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Home/Home/Loading/Loading";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if(loading || isAdminLoading){
    return <Loading></Loading>;
}

if (user && isAdmin) {
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;
