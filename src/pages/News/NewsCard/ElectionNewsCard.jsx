import React from 'react';
import Col6Card from './Col6Card';
import NewsTab from '../NewsTab';
import SidebarCard from './SidebarCard';

const ElectionNewsCard = () => {
    return (
        <div className='row w-100 mx-auto'>
            <SidebarCard tittle={'নির্বাচন সংবাদ'} />

            <Col6Card tittle={'নিউজ'} />

            <NewsTab />
        </div>
    );
};

export default ElectionNewsCard;