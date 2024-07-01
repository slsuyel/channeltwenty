/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const GoogleLoginBtn = () => {
  const { register, googleLogin, fbLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const fbLoginClick = () => {
    fbLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="d-flex justify-content-center ">
      <img
        style={{ cursor: 'pointer' }}
        onClick={handleGoogleLogin}
        width={200}
        height={55}
        src={
          'https://assignment-10-c69ca.web.app/assets/google-signin-button-a003ec47.png'
        }
        alt=""
        draggable={false}
        className="mx-auto sign-in-icon"
      />

      {/* <button onClick={fbLoginClick}>Facebook login</button> */}
    </div>
  );
};

export default GoogleLoginBtn;
