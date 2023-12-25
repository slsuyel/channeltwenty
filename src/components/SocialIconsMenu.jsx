import React from 'react';

const SocialIconsMenu = () => {
    return (
        <div className="mx-auto social-icons text-center w-100" >
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube" aria-hidden="true" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-hidden="true" />
            </a>
        </div>
    );
};

export default SocialIconsMenu;