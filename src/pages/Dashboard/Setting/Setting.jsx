import React, { useState } from 'react';
import { Button } from 'antd';



import SocialMedia from './SocialSettings/SocialMedia';
// import Advertisement from './Advertisement/Advertisement';
import Pages from './Pages/Pages';
// import VideoSetting from './VideoSetting/VideoSetting';

const Setting = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const buttons = [
        { label: 'Social', component: <SocialMedia /> },
        // { label: 'Advertise', component: <Advertisement /> },
        // { label: 'Team', component: <TeamSetting /> },
        { label: 'Page', component: <Pages /> },
        // { label: 'Video', component: <VideoSetting /> },
    ];
    const handleButtonClick = (index) => {
        setActiveComponent(buttons[index].component);
    };

    return (
        <div>
            <h4 className='mb-5'>Select any settings category</h4>

            <div className='d-flex gap-2 '>
                {buttons.map((button, index) => (
                    <Button type='primary' key={index} onClick={() => handleButtonClick(index)}>
                        {button.label}
                    </Button>
                ))}
            </div>

            <hr />
            <hr />
            <div>   {activeComponent}</div>

        </div>
    );
};

export default Setting;
