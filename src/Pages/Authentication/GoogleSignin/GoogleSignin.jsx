import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc'

const GoogleSignin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        console.log('clicked')
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = {
              fullName: loggedInUser.displayName,
              email: loggedInUser.email,
              role: "student", 
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
    }

    return (
      <div>
        <div className="divider"></div>
        <div className="w-full text-center my-4">
          <div
            onClick={handleGoogleSignIn}
            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
          >
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    );
};

export default GoogleSignin;
