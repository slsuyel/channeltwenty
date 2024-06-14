/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MiddleAdd = ({ title }) => {
  return (
    <div className="">
      {title && (
        <div className="mb-1 mx-auto  w-100">
          <h3
            className="border-2 border-bottom border-success"
            style={{ paddingLeft: 0 }}
          >
            <span className="fs-5 bg-success px-2 py-1 text-nowrap text-white">
              {title ? title : ''}
            </span>
          </h3>
        </div>
      )}

      <Link to={`#`}>
        <img
          width={'100%'}
          height={180}
          src="https://filestage.io/wp-content/uploads/2023/11/FC-Banner-ad-1024x274.webp"
          alt=""
          className=""
        />
      </Link>
    </div>
  );
};

export default MiddleAdd;
