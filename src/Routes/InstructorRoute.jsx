import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Home/Home/Loading/Loading";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if(loading || isInstructorLoading){
    return <Loading></Loading>;
}

if (user && isInstructor) {
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
