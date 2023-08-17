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