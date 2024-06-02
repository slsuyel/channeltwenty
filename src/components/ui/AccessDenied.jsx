/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const AccessDenied = () => {
    return (
        <div className='d-flex align-items-center justify-content-center '>
            <div className='py-5 text-center'>
                <h1 className="w3-jumbo w3-animate-top w3-center"><code>Access Denied</code></h1>
                <hr className="w3-border-white w3-animate-left" style={{ margin: 'auto', width: '50%' }} />
                <h3 className="w3-center w3-animate-right">You dont have permission to view this page.</h3>
                <h3 className="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
                <h6 className="w3-center w3-animate-zoom">error code:403 forbidden</h6>
                <br />
                <br />
                <br />
                <div className='text-center mt4'>
                    <Link
                        className="btn btn-danger fw-bold"
                        to="/"
                    >
                        Let's Back to home
                    </Link>
                </div>

            </div>



        </div>
    );
}

export default AccessDenied;
