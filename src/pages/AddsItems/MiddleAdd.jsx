/* eslint-disable react/prop-types */
import React from 'react';

const MiddleAdd = ({ title }) => {
    return (
        <div className=''>

            {
                title && <div className="mb-1 mx-auto  w-100">
                    <h3
                        className="border-2 border-bottom border-success"
                        style={{ paddingLeft: 0 }}
                    >
                        <span className="fs-5 bg-success px-2 py-1 text-nowrap text-white">
                            {title ? title : ''}
                        </span>
                    </h3>
                </div>
            }



            <div>
                <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_735/https://www.channeltwenty.com/wp-content/uploads/2022/11/RN-Trading-3.jpg" alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default MiddleAdd;