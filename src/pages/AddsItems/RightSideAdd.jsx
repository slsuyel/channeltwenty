import React from 'react';
import SocialIconsMenu from '../../components/SocialIconsMenu';

const RightSideAdd = () => {
    return (
        <div className='col-md-3'>
            <div className="mb-1 mx-auto  w-100 mb-3">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        সোশ্যাল মিডিয়া </span>
                </h3>
            </div>

            <SocialIconsMenu />
            <div>
                <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_350/https://www.channeltwenty.com/wp-content/uploads/2022/09/RN-Tours.png" alt="" className='img-fluid' />
            </div>

        </div>
    );
};

export default RightSideAdd;