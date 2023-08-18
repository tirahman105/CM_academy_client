import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaFacebookF } from "react-icons/fa";

const FacebookSignIn = () => {

    const { facebookSignIn } = useContext(AuthContext);

    const handleFacebookSignIn = () => {
        console.log('clicked')
        facebookSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        })
           
    
    }

    return (
        <div>
      <div className="w-full text-center ">
      <div
          onClick={handleFacebookSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FaFacebookF className='text-blue-600' size={32} />

          <p>Continue with Facebook</p>
        </div>
        
      </div>
    </div>
    );
};

export default FacebookSignIn;