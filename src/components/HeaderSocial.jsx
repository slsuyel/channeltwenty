import useSocialMedia from "../hooks/useSocialMedia";

const HeaderSocial = () => {

    const { allSocial, isLoading } = useSocialMedia()
    if (isLoading) {
        return null
    }



    return (
        <>
            <div className='d-flex fs-2 gap-3 justify-content-around my-1'>
                {allSocial.slice(0, 3).map(social => (
                    <a
                        key={social.id}
                        className='text-dark-emphasis '
                        target='_blank'
                        href={social.link} // Use the link from data
                        rel="noreferrer"
                    >
                        <i className={`hover fab fa-${social.platform}`} aria-hidden="true"></i>
                    </a>
                ))}
            </div>
            <div>
                <h3 className='fw-bold mb-0'>Follow Us</h3>
            </div>
            <div className='d-flex fs-2 gap-3 justify-content-around my-1'>
                {allSocial.slice(3, 6).map(social => (
                    <a
                        key={social.id}
                        className='text-dark-emphasis '
                        target='_blank'
                        href={social.link} // Use the link from data
                        rel="noreferrer"
                    >
                        <i className={`hover fab fa-${social.platform}`} aria-hidden="true"></i>
                    </a>
                ))}
            </div>

        </>
    );
};

export default HeaderSocial;
