import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../Pages/Home/Home/Loading/Loading";
import TestQuiz from "../Pages/CoursePage/Quiz/TestQuiz";

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
const StudentDashboard = lazy(() =>
  import("../Pages/Dashboard/Student/StudentDashboard/StudentDashboard")
);
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
        path: "/instructorProfile",
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
        element: <CoursePage />,
      },
      {
        path: "coursepageUpdate",
        element: <CoursePageUpdate />,
      },
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
        element: <CheckOut />,
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
        path: "/quizTest",
        element: <TestQuiz></TestQuiz>,
      }
      ,
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/about",
        element: <AboutUs />,
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
          <Dashboard />
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
        element: <AdminDashboard />,
      },
      {
        path: "manage-students",
        element: <ManageStudents />,
      },
      {
        path: "All-enrolled-students",
        element: <AllEnrolledStudent />,
      },
      {
        path: "manage-instructors",
        element: <ManageInstructors />,
      },
      {
        path: "manage-course",
        element: <ManageCourse />,
      },
      {
        path: "withdraw-request",
        element: <WithdrawRequest />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
      {
        path: "instructor-dashboard",
        element: <InstructorDashboard />,
      },
      {
        path: "instructor-profile",
        element: <InstructorProfile />,
      },
      {
        path: "my-courses-instructor",
        element: <MyCourseInstructor />,
      },
      {
        path: "my-blogs",
        element: <MyBlogs />,
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
        element: <BankAccountSetup />,
      },
      {
        path: "add-course",
        element: <AddCourses />,
      },
      {
        path: "add-blog",
        element: <AddNewBlog />,
      },
      {
        path: "student-dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "student-payment",
        element: <StudentPayment />,
      },
      {
        path: "student-profile",
        element: <StudentProfileUpdated />,
      },
    ],
  },
]);

export default router;
