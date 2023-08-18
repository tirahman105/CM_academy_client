import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import AllCourseCategories from "../Pages/AllCourseCategories/AllCourseCategories";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Checkout from "../payments/PaymentCheckout/CheckOut";
import PaymentSuccess from "../payments/PaymentFailSuccess/PaymentSuccess";
import PaymentFail from "../payments/PaymentFailSuccess/PaymentFail";

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
        path: "/courseDetails", // Define the path with parameters
        element: <CourseDetails ></CourseDetails>,
      },
      {
        path: "/courseCategories", // Define the path with parameters
        element: <AllCourseCategories></AllCourseCategories>,
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
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'payment/success/:tranId',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: 'payment/fail/:tranId',
        element: <PaymentFail></PaymentFail>
      }
    ],
  },
]);

export default router;
