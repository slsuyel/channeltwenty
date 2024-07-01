import React from 'react';

const GoogleLoginBtn = () => {
  return (
    <div className="text-center">
      <button className="btn btn-danger m-2">
        <i className="fab fa-google mr-2"></i> Google Login
      </button>
      <button className="btn btn-primary m-2">
        <i className="fab fa-facebook-f mr-2"></i> Facebook Login
      </button>
    </div>
  );
};

export default GoogleLoginBtn;
