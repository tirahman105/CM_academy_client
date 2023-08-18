import { useState } from "react";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { useParams } from "react-router-dom"; // Import `useParams` to access route parameters

const ResetPassword = () => {
  const { oobCode } = useParams(); // Get the oobCode from the URL

  const [password, setPassword] = useState("");
  const [passwordReset, setPasswordReset] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleResetPassword = () => {
    const auth = getAuth();
    confirmPasswordReset(auth, oobCode, password)
      .then(() => {
        setPasswordReset(true);
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
      });
  };

  return (
    <div>
      {passwordReset ? (
        <p>Your password has been reset successfully.</p>
      ) : (
        <>
          <h2>Reset Password</h2>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button onClick={handleResetPassword}>Reset Password</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
