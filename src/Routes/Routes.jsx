import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Loading from "../Pages/Home/Home/Loading/Loading";
import ChatWithStudent from "../Pages/Dashboard/Instructor/MyCourseInstructor/ChatWithStudent";
import ChatRequest from "../Pages/Dashboard/Instructor/MyCourseInstructor/chatRequest";
import CreateSupportTicket from "../Pages/Dashboard/Student/StudentProfile/SupportTicket/CreateSupportTicket";
import AllSupportTickets from "../Pages/Dashboard/Admin/ManageStudents/Support/getAllSupportTicket";
import ResponseTicket from "../Pages/Dashboard/Admin/ManageStudents/Support/ResponseTicket";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import { motion } from "framer-motion"; // Import motion and other necessary components

// import NewInstructorDashboard from "../Pages/Dashboard/Instructor/Dashboard/NewInstructorDashboard/NewInstructorDashboard";

// Lazy-loaded components
const LazyMain = lazy(() => import("../Layout/Main"));
const Home = lazy(() => import("../Pages/Home/Home/Home"));
const CourseDetails = lazy(() =>
  import("../Pages/CourseDetails/CourseDetails")
);
const AllCourseCategories = lazy(() =>
  import("../Pages/AllCourseCategories/AllCourseCategories")
);
const SignIn = lazy(() => import("../Pages/Authentication/SignIn/SignIn"));
const SignUp = lazy(() => import("../Pages/Authentication/SignUp/SignUp"));
const Instructors = lazy(() =>
  import("../Pages/Instructors/Instructors/Instructors")
);
const AddCourses = lazy(() =>
  import("../Pages/Dashboard/Instructor/AddCourses/AddCourses")
);
const InstructorSignUp = lazy(() =>
  import("../Pages/Authentication/InstructorSignUp/InstructorSignUp")
);

const PaymentSuccess = lazy(() =>
  import("../payments/PaymentFailSuccess/PaymentSuccess")
);

const CheckOut = lazy(() => import("../payments/PaymentCheckout/CheckOut"));
const PaymentFail = lazy(() =>
  import("../payments/PaymentFailSuccess/PaymentFail")
);

const ResetPassword = lazy(() =>
  import("../Pages/Authentication/ResetPassword/ResetPassword")
);
const ForgotPassword = lazy(() =>
  import("../Pages/Authentication/ForgotPassword/ForgotPassword")
);
const CoursePage = lazy(() => import("../Pages/CoursePage/CoursePage"));
const QuestionForm = lazy(() =>
  import("../Pages/Dashboard/Instructor/AddNewCourse/QuestionForm")
);
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Dashboard = lazy(() => import("../Layout/Dashboard"));
const AddNewBlog = lazy(() =>
  import("../Pages/Dashboard/Instructor/AddNewBlog/AddNewBlog")
);
const AllBlog = lazy(() => import("../Pages/Blogs/AllBlog"));
const BlogDetails = lazy(() => import("../Pages/Blogs/BlogDetails"));
const EditProfile = lazy(() =>
  import("../Pages/Dashboard/Shared/EditProfile/EditProfile")
);
const ManageStudents = lazy(() =>
  import("../Pages/Dashboard/Admin/ManageStudents/ManageStudents")
);
const EnrolledStudents = lazy(() =>
  import("../Pages/Dashboard/Instructor/MyEnrolledStudents/MyEnrolledStudents")
);
const ManageInstructors = lazy(() =>
  import("../Pages/Dashboard/Admin/ManageInstructors/ManageInstructors")
);
const ManageCourse = lazy(() =>
  import("../Pages/Dashboard/Admin/ManageCourse/ManageCourse")
);
const WithdrawRequest = lazy(() =>
  import("../Pages/Dashboard/Admin/WithdarwRequest/WithdrawRequest")
);
const AddCategory = lazy(() =>
  import("../Pages/Dashboard/Admin/AddCategory/AddCategory")
);
const AdminDashboard = lazy(() =>
  import("../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard")
);
const AllEnrolledStudent = lazy(() =>
  import("../Pages/Dashboard/Admin/AllEnrolledStudent/AllEnrolledStudent")
);
const MyEnrolledStudents = lazy(() =>
  import("../Pages/Dashboard/Instructor/MyEnrolledStudents/MyEnrolledStudents")
);
const MyPayments = lazy(() =>
  import("../Pages/Dashboard/Instructor/MyPatments/MyPayments")
);
const MyBlogs = lazy(() =>
  import("../Pages/Dashboard/Instructor/MyBlogs/MyBlogs")
);
const MyCourseInstructor = lazy(() =>
  import("../Pages/Dashboard/Instructor/MyCourseInstructor/MyCourseInstructor")
);
const StudentPayment = lazy(() =>
  import("../Pages/Dashboard/Student/StudentPayment/StudentPayment")
);
const CourseDetailsDynamic = lazy(() =>
  import("../Pages/CourseDetails/CourseDetailsDynamic")
);
const MyCourses = lazy(() =>
  import("../Pages/Dashboard/Student/MyCourses/MyCourses")
);
// const StudentDashboard = lazy(() =>
//   import("../Pages/Dashboard/Student/StudentDashboard/StudentDashboard")
// );
const InstructorDashboard = lazy(() =>
  import(
    "../Pages/Dashboard/Instructor/InstructorDashboard/InstructorDAshboard"
  )
);
const ErrorPage = lazy(() => import("../Pages/Shared/ErrorPage/ErrorPage"));
const InstructorPublicProfile = lazy(() =>
  import("../Pages/instructorPublicProfile/InstructorPublicProfile")
);
const CoursePageUpdate = lazy(() =>
  import("../Pages/CoursePage/CoursePageUpdate")
);
const BankAccountSetup = lazy(() =>
  import("../Pages/Dashboard/Instructor/BankaccountSetup/BankAccountSetup")
);
const Quiz = lazy(() => import("../Pages/CoursePage/Quiz/Quiz"));
const InstructorProfile = lazy(() =>
  import("../Pages/Dashboard/Instructor/InstructorProfile/InstructorProfile")
);
const StudentProfileUpdated = lazy(() =>
  import("../Pages/Dashboard/Student/StudentProfile/StudentProfileUpdated")
);
const WithdrawHistory = lazy(() =>
  import("../Pages/Dashboard/Instructor/WithdrawHistory/WithdrawHistory")
);
const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"));
const PrivacyPolicy = lazy(() =>
  import("../Pages/PrivacyPolicy/PrivacyPolicy")
);
const TermsAndConditions = lazy(() =>
  import("../Pages/TermsAndConditions/TermsAndConditions")
);
const NewInstructorDashboard = lazy(() =>
  import(
    "../Pages/Dashboard/Instructor/Dashboard/NewInstructorDashboard/NewInstructorDashboard"
  )
);
const NewStudentDashboard = lazy(() =>
  import(
    "../Pages/Dashboard/Student/Dashboard/NewDashboard/NewStudentDashboard"
  )
);
// const ChatWithStudent = lazy(() =>
//   import("../Pages/Dashboard/Instructor/MyCourseInstructor/ChatWithStudent")
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading></Loading>}>
        <LazyMain />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails />,
      },
      {
        path: "/courseDetailsDynamic",
        element: <CourseDetailsDynamic />,
      },
      {
        path: "/courseCategories",
        element: <AllCourseCategories />,
      },
      {
        path: "/instructor",
        element: <Instructors />,
      },
      {
        path: "/instructorProfile/:instructorId",
        element: <InstructorPublicProfile />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "instructorSignUp",
        element: <InstructorSignUp />,
      },
      {
        path: "coursepage",
        element: (
          <StudentRoute>
            <CoursePage />
          </StudentRoute>
        ),
      },
      {
        path: "coursepageUpdate",
        element: <CoursePageUpdate />,
      },
      // <motion.div
      //       initial={{ opacity: 0, y: 10 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       exit={{ opacity: 0, transition: { duration: 1.5 } }}
      //       transition={{ duration: 0.5  }}
      //       >
      //         <NewStudentDashboard />
      //       </motion.div>
      {
        path: "/reset-password/:oobCode",
        element: <ResetPassword />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/checkout/:id",

        element: (
          <PrivateRoute>
            <CheckOut />,
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail />,
      },
      {
        path: "/allblog",
        element: <AllBlog />,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/course-page",
        element: <CoursePage />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/about",
        element: (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            transition={{ duration: 0.5 }}

            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 1 }}
          >
            <AboutUs />,
          </motion.div>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <Suspense fallback={<Loading></Loading>}>
        <PrivateRoute>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Dashboard />
          </motion.div>
        </PrivateRoute>
      </Suspense>
    ),
    children: [
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "enrolled-students",
        element: <EnrolledStudents />,
      },
      {
        path: "admin-dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "manage-students",
        element: (
          <AdminRoute>
            <ManageStudents />
          </AdminRoute>
        ),
      },
      {
        path: "All-enrolled-students",
        element: (
          <AdminRoute>
            <AllEnrolledStudent />
          </AdminRoute>
        ),
      },
      {
        path: "manage-instructors",
        element: (
          <AdminRoute>
            <ManageInstructors />
          </AdminRoute>
        ),
      },
      {
        path: "manage-course",
        element: (
          <AdminRoute>
            <ManageCourse />
          </AdminRoute>
        ),
      },
      {
        path: "withdraw-request",
        element: (
          <AdminRoute>
            <WithdrawRequest />
          </AdminRoute>
        ),
      },
      {
        path: "add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
      {
        path: "instructor-dashboard",
        element: (
          <InstructorRoute>
            {" "}
            <InstructorDashboard></InstructorDashboard>{" "}
          </InstructorRoute>
        ),
      },
      {
        path: "new-instructor-dashboard",
        element: (
          <InstructorRoute>
            <NewInstructorDashboard></NewInstructorDashboard>
          </InstructorRoute>
        ),
      },
      {
        path: "instructor-profile",
        element: (
          <InstructorRoute>
            {" "}
            <InstructorProfile />
          </InstructorRoute>
        ),
      },
      {
        path: "my-courses-instructor",
        element: <MyCourseInstructor />,
      },
      {
        path: "my-blogs",
        element: (
          <InstructorRoute>
            <MyBlogs />
          </InstructorRoute>
        ),
      },
      {
        path: "my-enrolled-students",
        element: <MyEnrolledStudents />,
      },
      {
        path: "my-payments",
        element: <MyPayments />,
      },
      {
        path: "withdraw-history",
        element: <WithdrawHistory />,
      },
      {
        path: "acc-setup",
        element: (
          <InstructorRoute>
            <BankAccountSetup />
          </InstructorRoute>
        ),
      },
      {
        path: "add-course",
        element: (
          <InstructorRoute>
            <AddCourses />
          </InstructorRoute>
        ),
      },
      {
        path: "add-blog",
        element: (
          <InstructorRoute>
            <AddNewBlog />
          </InstructorRoute>
        ),
      },
      {
        path: "quiz",
        element: <QuestionForm />,
      },

      // {

      //   path: "student-dashboard",
      //   element: <StudentDashboard />,
      // },
      // {
      //   path: "my-courses",
      //   element: <MyCourses />,
      // },

      {
        path: "chat-w-student",
        element: <ChatWithStudent />,
      },
      {
        path: "msg-request",
        element: <ChatRequest></ChatRequest>,
      },

      {
        path: "support-tickets",
        element: <AllSupportTickets></AllSupportTickets>,
      },
      {
        path: "response-ticket",
        element: <ResponseTicket></ResponseTicket>,
      },

      /////////////////////////// student routes ///////////////////////////
      {
        path: "student-dashboard",
        element: (
          <StudentRoute>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
              transition={{ duration: 0.5 }}
            >
              <NewStudentDashboard />
            </motion.div>
          </StudentRoute>
        ),
      },
      {
        path: "student-payment",
        element: (
          <StudentRoute>
            <StudentPayment />
          </StudentRoute>
        ),
      },
      {
        path: "student-profile",
        element: (
          <StudentRoute>
            <StudentProfileUpdated />
          </StudentRoute>
        ),
      },
      {
        path: "student-support-center",
        element: (
          <StudentRoute>
            <CreateSupportTicket></CreateSupportTicket>
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
