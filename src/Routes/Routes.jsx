import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element: <Instructors></Instructors>
      },
      {
        path: "login",
        element:<SignIn></SignIn>
      },
      {
        path:"signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      }
    ]
  },
]);

export default router;
