import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const SignIn = () => {
  // const handleLogin = event => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(email, password);
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { email, password } = data;
  
    console.log(data);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        alert('Sign in successful')
      });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Form on the right side */}
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
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
                {...register("password")}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="Login" />
            </div>
            <p className="my-5 text-center">
              Already have an account?
              <Link className="text-orange-700 font-bold" to="/signup">
                {" "}
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        {/* Login text on the left side */}
        <div className="text-center md:w-1/2 lg:text-center bg-[#A5CAD3] m-5 p-24">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Step into a realm of seamless access and personalized experiences.
            Your journey awaits—login now to embark on an adventure of discovery
            and connection. Embrace the power of Provident, where your desires
            meet boundless opportunities. Join us today and let the magic begin!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
