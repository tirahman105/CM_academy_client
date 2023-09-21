import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Home/Home/Loading/Loading";
import useStudent from "../Hooks/useStudent";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if(loading || isStudentLoading){
    return <Loading></Loading>;
}

if (user && isStudent) {
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default StudentRoute;