import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import AllCourseCategories from "../Pages/AllCourseCategories/AllCourseCategories";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import AddCourses from "../Pages/Dashboard/Instructor/AddCourses/AddCourses";
import InstructorSignUp from "../Pages/Authentication/InstructorSignUp/InstructorSignUp";
import PaymentSuccess from "../payments/PaymentFailSuccess/PaymentSuccess";
import CheckOut from "../payments/PaymentCheckout/CheckOut";
import PaymentFail from "../payments/PaymentFailSuccess/PaymentFail";
import ResetPassword from "../Pages/Authentication/ResetPassword/ResetPassword";
import ForgotPassword from "../Pages/Authentication/ForgotPassword/ForgotPassword";
import CoursePage from "../Pages/CoursePage/CoursePage";
import QuestionForm from "../Pages/Dashboard/Instructor/AddNewCourse/QuestionForm";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddNewBlog from "../Pages/Dashboard/Instructor/AddNewBlog/AddNewBlog";
import AllBlog from "../Pages/Blogs/AllBlog";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import EditProfile from "../Pages/Dashboard/Shared/EditProfile/EditProfile";
import ManageStudents from "../Pages/Dashboard/Admin/ManageStudents/ManageStudents";
import EnrolledStudents from "../Pages/Dashboard/Instructor/MyEnrolledStudents/MyEnrolledStudents";
import ManageInstructors from "../Pages/Dashboard/Admin/ManageInstructors/ManageInstructors";
import ManageCourse from "../Pages/Dashboard/Admin/ManageCourse/ManageCourse";
import WithdrawRequest from "../Pages/Dashboard/Admin/WithdarwRequest/WithdrawRequest";
import AddCategory from "../Pages/Dashboard/Admin/AddCategory/AddCategory";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import AllEnrolledStudent from "../Pages/Dashboard/Admin/AllEnrolledStudent/AllEnrolledStudent";
import MyEnrolledStudents from "../Pages/Dashboard/Instructor/MyEnrolledStudents/MyEnrolledStudents";
import MyPayments from "../Pages/Dashboard/Instructor/MyPatments/MyPayments";
import MyCourses from "../Pages/Dashboard/Instructor/MyCourse/MyCourses";

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
        element: <SignIn></SignIn>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "instructorSignUp",
        element: <InstructorSignUp></InstructorSignUp>
      },
      {
        path: "coursepage",
        element: <CoursePage></CoursePage>
      },
      {
        path: "/reset-password/:oobCode",
        element: <ResetPassword></ResetPassword>

      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>

      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path: 'payment/success/:tranId',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: 'payment/fail/:tranId',
        element: <PaymentFail></PaymentFail>
      },
      {
        path: 'allblog',
        element: <AllBlog></AllBlog>
      },
      {
        path: '/blog-details/:id',
        element: <BlogDetails></BlogDetails>
      },
      {path:'course-page',
      element: <CoursePage></CoursePage>
    }

    ],
  },

  
      // {
      //   path:"/addcourse",
      //   element: <PrivateRoute><AddCourses></AddCourses></PrivateRoute>
      // }
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        children: [

          // --------------------------shared -------------------------------------------
          {
            path: 'edit-profile',
            element:<EditProfile></EditProfile>
          },
          {
            path: 'enrolled-students',
            element:<EnrolledStudents></EnrolledStudents>
          },

          // --------------------------Admin ---------------------------------------
          {
            path: 'admin-dashboard',
            element:<AdminDashboard></AdminDashboard>
          },
          {
            path: 'manage-students',
            element:<ManageStudents></ManageStudents>
          },
          {
            path: 'All-enrolled-students',
            element:<AllEnrolledStudent></AllEnrolledStudent>
          },
          {
            path: 'manage-instructors',
            element:<ManageInstructors></ManageInstructors>
          },
          {
            path: 'manage-course',
            element:<ManageCourse></ManageCourse>
          },
          {
            path: 'withdraw-request',
            element:<WithdrawRequest></WithdrawRequest>
          },
          {
            path: 'add-category',
            element:<AddCategory></AddCategory>
          },
          // --------------------------Instructor ---------------------------------------
          {
            path:"my-courses",
            element: <MyCourses></MyCourses>
          },
          {
            path:"my-enrolled-students",
            element: <MyEnrolledStudents></MyEnrolledStudents>
          },
          {
            path:"my-payments",
            element: <MyPayments></MyPayments>
          },
          {
            path:"add-course",
            element: <AddCourses></AddCourses>
          },
          {
            path: 'add-blog',
            element: <AddNewBlog></AddNewBlog>
          },
          {
            path: "quiz",
            element: <QuestionForm></QuestionForm>
          },
        
        ]
      }
]);

export default router;



