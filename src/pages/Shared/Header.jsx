import React from 'react';
import header from '../../assets/images/banner-logo.png'
const Header = () => {
    return (
        <div className='w-100 mx-auto custom-bg position-relative'>
            <div className='text-center '>
                <img
                    draggable={false}
                    src={header}
                    alt=""
                    className="img-fluid w-50"
                />

                <div
                    className='d-none d-md-block'
                    style={{
                        position: 'absolute',
                        left: '41px',
                        top: '50px',
                    }}
                >
                    <div className='d-flex fs-2 gap-3 justify-content-around my-1'>
                        <a className='text-dark-emphasis' target='_blank' href="https://www.facebook.com" rel="noreferrer">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a className='text-dark-emphasis' target='_blank' href="https://www.youtube.com" rel="noreferrer">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                        <a className='text-dark-emphasis' target='_blank' href="https://www.twitter.com" rel="noreferrer">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div>
                        <h3 className='fw-bold mb-0'>Follow Us</h3>
                    </div>
                    <div className='d-flex fs-2 gap-3 justify-content-around my-1'>
                        <a className='text-dark-emphasis' target='_blank' href="https://www.linkedin.com" rel="noreferrer">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a className='text-dark-emphasis' target='_blank' href="https://www.instagram.com" rel="noreferrer">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a className='text-dark-emphasis' target='_blank' href="https://www.whatsapp.com" rel="noreferrer">
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>


                <div
                    className='d-none d-md-block'
                    style={{
                        position: 'absolute',
                        right: '41px',
                        top: '40px',
                    }}

                >
                    <p className='fw-bold mb-1'>App Download</p>
                    <img src="https://tools-suyel.netlify.app/assets/qr-scanning-22cb3eea.gif" alt="" width={130} />
                </div>



            </div>

        </div>
    );
};

export default Header;