import React from 'react';
import LeftSideAdds from '../../AddsItems/LeftSideAdds';
import MiddleNewsBody from './MiddleNewsBody';
import RightSideAdd from '../../AddsItems/RightSideAdd';

const MiddleCard = () => {
    return (
        <div>
            <div className='row w-100 mx-auto my-1 '>
                <LeftSideAdds />
                <MiddleNewsBody />
                <RightSideAdd />
            </div>

        </div>
    );
};

export default MiddleCard;