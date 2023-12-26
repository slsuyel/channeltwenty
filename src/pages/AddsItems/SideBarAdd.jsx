/* eslint-disable react/prop-types */
import React from 'react';

const SideBarAdd = ({ img }) => {
    return (
        <div className='my-2'>
            <img src={img} alt="" className='w-100 mx-auto text-center img-fluid' />
        </div>
    );
};

export default SideBarAdd;
