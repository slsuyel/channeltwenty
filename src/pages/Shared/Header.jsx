import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import header from '../../assets/images/banner-logo.png'
import social from '../../assets/images/social-media.png'
import HeaderSocial from '../../components/HeaderSocial';
import SocialIconsMenu from '../../components/SocialIconsMenu';

const Header = () => {
    const [mobile, setMobile] = useState(false);



    const handleMobileSocial = () => {
        setMobile(!mobile);
    };



    return (

        <>
            <div className='w-100 mx-auto custom-bg position-relative'>
                <div className='text-center '>
                    <img
                        draggable={false}
                        src={header}
                        alt=""
                        className="img-fluid w-50"
                    />

                    <div className='d-none d-md-block' style={{ position: 'absolute', left: '41px', top: '50px' }}>
                        <HeaderSocial />
                    </div>

                    <button onClick={handleMobileSocial} className='d-block d-sm-none btn' style={{ position: 'absolute', left: '18px', top: '13px' }}>
                        <img src={social} width={50} alt="" />
                    </button>

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

                    <div className='d-block d-sm-none' style={{ position: 'absolute', right: '18px', top: '32px' }}>
                        <span className='hover'> App <i className="fa-solid fa-download"></i></span>
                    </div>


                </div>
            </div>

            {mobile && (
                <Modal
                    size="sm"
                    show={mobile}
                    onHide={() => setMobile(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Follow us on Social media
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <SocialIconsMenu />

                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default Header;
