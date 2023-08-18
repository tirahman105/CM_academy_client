
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSent(true);
        // Show SweetAlert2 success notification
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "An email with reset instructions has been sent to your inbox.",
          onClose: () => {
            setEmailSent(false); // Reset the emailSent state
            navigate("/login"); // Redirect to the login page
          },
        });
      })
      .catch((error) => {
        console.error("Error sending reset password email:", error);
        // Show SweetAlert2 error notification
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message,
        });
      });
  };

  return (
    <div>
      {emailSent ? (
        // This section is no longer needed as SweetAlert will handle it
        // Show SweetAlert2 success notification
        // Swal.fire({
        //   icon: "success",
        //   title: "Success!",
        //   text: "An email with reset instructions has been sent to your inbox.",
        //   onClose: () => setEmailSent(false), // Reset the emailSent state
        // })
        <div className="p-10 flex justify-center items-center">
        <div>
          <h2 className="text-2xl text-center mb-4">Please Check your email and reset your password. </h2>
         
        </div>
      </div>
      ) : (
        <div className="p-10 flex justify-center items-center">
          <div>
            <h2 className="text-2xl text-center mb-4">Forgot Password</h2>
            <div className="p-10 bg-slate-200 rounded-lg">
              <div>
                <label>Email:</label>
                <input
                  className="p-3 rounded"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Give your email"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="btn btn-primary"
                  onClick={handleResetPassword}
                >
                  Send Reset Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
