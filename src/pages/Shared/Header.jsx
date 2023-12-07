import React from 'react';
import header from '../../assets/images/header-banner.png'
const Header = () => {
    return (
        <div className='w-100 mx-auto'>
            <img
                src={header}
                alt=""
                className="img-fluid w-100"
                style={{ height: 215 }}
            />

        </div>
    );
};

export default Header;