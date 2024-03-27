const HeaderSocial = () => {
    return (
        <>
            <div className='d-flex fs-2 gap-3 justify-content-around my-1'>
                <a className='text-dark-emphasis ' target='_blank' href="https://www.facebook.com" rel="noreferrer">
                    <i className="hover fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a className='text-dark-emphasis ' target='_blank' href="https://www.youtube.com" rel="noreferrer">
                    <i className="hover fab fa-youtube" aria-hidden="true"></i>
                </a>
                <a className='text-dark-emphasis ' target='_blank' href="https://www.twitter.com" rel="noreferrer">
                    <i className="hover fab fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
            <div>
                <h3 className='fw-bold mb-0'>Follow Us</h3>
            </div>
            <div className='d-flex fs-2 gap-3 justify-content-around my-1'>
                <a className='text-dark-emphasis ' target='_blank' href="https://www.linkedin.com" rel="noreferrer">
                    <i className="hover fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a className='text-dark-emphasis ' target='_blank' href="https://www.instagram.com" rel="noreferrer">
                    <i className="hover fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a className='text-dark-emphasis ' target='_blank' href="https://www.whatsapp.com" rel="noreferrer">
                    <i className="hover fab fa-whatsapp" aria-hidden="true"></i>
                </a>
            </div>
        </>
    );
};

export default HeaderSocial;