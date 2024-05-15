import React from 'react';
import useSocialMedia from '../hooks/useSocialMedia';

const SocialIconsMenu = () => {
    const { allSocial, isLoading } = useSocialMedia()
    if (isLoading) {
        return null
    }



    return (
        <div className='d-flex fs-2 gap-3 justify-content-around my-1'>


            {
                allSocial.map((social) => <a
                    key={social.id}
                    className='text-dark-emphasis '
                    target='_blank'
                    href={social.link}
                    rel="noreferrer"
                >
                    <i className={`hover fab fa-${social.platform}`} aria-hidden="true"></i>
                </a>)
            }



        </div>
    );
};

export default SocialIconsMenu;