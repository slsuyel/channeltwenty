/* eslint-disable react/prop-types */

import React from 'react';

const LayoutContainer = ({ children }) => {
    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                {children}
            </div>
        </div>
    );
};

export default LayoutContainer;
