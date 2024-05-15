import React, { useState } from 'react';
import { Button } from 'antd';

// Import your components
import SocialMedia from './SocialMedia';
import TeamSetting from './TeamSetting';

const Setting = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const buttons = [
        { label: 'Social', component: <SocialMedia /> },
        { label: 'Team', component: <TeamSetting /> },
    ];
    const handleButtonClick = (index) => {
        setActiveComponent(buttons[index].component);
    };

    return (
        <div>
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
