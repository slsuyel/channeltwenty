import React from 'react';

const LeftSideAdds = () => {
    return (
        <div className='col-md-3'>
            <div className="mb-1 mx-auto ps-2 w-100">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        CHANNEL TWENTY
                    </span>
                </h3>
            </div>

            <div>
                <img src="https://www.channeltwenty.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-03-07-at-4.03.52-PM.jpeg" alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default LeftSideAdds;