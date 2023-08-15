import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

// const SignUp = () => {
//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//     };

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);

  const onSubmit = (data) => 
  {
     createUser(data.email, data.password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    reset();
    alert(' successfully registered')
  });
  console.log(data);
  }
  
  

 


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Form on the right side */}
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
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
                type="password"
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
          <h1 className="text-5xl font-bold">Join the Knowledge Revolution!</h1>
          <h1 className="text-3xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Unleash your potential with our educational platform. Sign up now to
            access a treasure trove of learning resources, expert guidance, and
            a vibrant community of learners. Begin your journey towards
            excellence by creating your account today. Let&apos;s learn, grow,
            and succeed together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
