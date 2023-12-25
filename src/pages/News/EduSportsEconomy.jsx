import React from 'react';
import SportsNews from './NewsCard/SportsNews';
import SidebarCard from './NewsCard/SidebarCard';

const EduSportsEconomy = () => {
    return (
        <div className='row w-100 mx-auto'>

            <SidebarCard tittle={'শিক্ষা, বিজ্ঞান ও প্রযুক্তি'} />
            <SportsNews />
            <SidebarCard tittle={'অর্থনীতি'} />
        </div>
    );
};

export default EduSportsEconomy;