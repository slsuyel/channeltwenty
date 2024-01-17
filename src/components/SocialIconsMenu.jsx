import React from 'react';

const SocialIconsMenu = () => {
    return (
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
    );
};

export default SocialIconsMenu;