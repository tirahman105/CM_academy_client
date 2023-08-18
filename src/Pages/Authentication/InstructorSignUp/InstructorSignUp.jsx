import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import Swal from "sweetalert2";

const InstructorSignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, logOut } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        logOut();
        reset();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registration Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
        sendVerificationEmail(loggedUser);

        // Save user data to your server
        const saveUser = {
          fullName: data.fullName,
         
          email: data.email,
          role: "instructor",
        };

        fetch("https://cm-academy-test-server-production.up.railway.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((response) => {
            if (response.ok) {
              console.log("User data saved to the server.");
            } else {
              console.error("Failed to save user data:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error saving user data:", error);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Before login Your email Verify Please',
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Form on the right side */}
        <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("fullName", { required: true })}
                placeholder="Full Name"
                name="fullName"
                className="input input-bordered"
              />

              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                name="phone"
                className="input input-bordered"
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                 type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
                <label className="mt-4">
              <input type="checkbox" onChange={toggleShowPassword} />
              <span className="label-text ml-2">Show password</span>
            </label>
              <p className="text-xs px-1 font-semibold text-red-600 pt-3">{error}</p>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-success"
                type="submit"
                value="Sign up "
              />
            </div>
          </form>
          <p className="my-5 text-center">
            Already have an account?
            <Link className="text-orange-700 font-bold" to="/login">
              {" "}
              Sign in
            </Link>
          </p>
        </div>

        {/* Login text on the left side */}
        <div className="text-center md:w-1/2 lg:text-center">
          <h1 className="text-5xl font-bold">Come teach with us!</h1>

         <div className="px-24">
         <img src="https://i.ibb.co/685K12g/job-hiring-concept-illustration-251005-489-removebg-preview.png" alt="" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSignUp;
