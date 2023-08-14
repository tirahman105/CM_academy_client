import { Link } from "react-router-dom";


const SignUp = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                {/* Form on the right side */}
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                className="input input-bordered"
                            />

                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="fullName"
                                className="input input-bordered"
                            />

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
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
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="Sign up " />
                        </div>
                    </form>
                    <p className="my-5 text-center">Already have an account?
                        <Link className="text-orange-700 font-bold" to='/login'> Sign in</Link>
                    </p>
                </div>

                {/* Login text on the left side */}
                <div className="text-center md:w-1/2 lg:text-center">
                    <h1 className="text-5xl font-bold">Join the Knowledge Revolution!</h1>
                    <h1 className="text-3xl font-bold">Sign up now!</h1>
                    <p className="py-6">
                        Unleash your potential with our educational platform. Sign up now to access a treasure trove of learning resources, expert guidance, and a vibrant community of learners. Begin your journey towards excellence by creating your account today. Let&apos;s learn, grow, and succeed together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;