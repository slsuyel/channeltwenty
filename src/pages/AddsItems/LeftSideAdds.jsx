import React from 'react';
import DynamicDate from '../../components/DynamicDate';

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

            <div className='m-auto'>

                <DynamicDate />


                <div className='text-center'>  <img src="https://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif" alt="" className='img-fluid' /></div>
            </div>
        </div>
    );
};

export default LeftSideAdds;