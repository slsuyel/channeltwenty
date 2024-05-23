import React from 'react';

import MiddleCard from './NewsCard/MiddleCard';
import CrimeInternational from './NewsCard/CrimeInternational';
import ElectionNewsCard from './NewsCard/ElectionNewsCard';
import EduSportsEconomy from './EduSportsEconomy';
import UpdateNewsSlider from './UpdateNewsSlider';

const NewsHome = () => {
    return (
        <div>


            <UpdateNewsSlider />
            <MiddleCard />
            <CrimeInternational />
            <ElectionNewsCard />
            <EduSportsEconomy />
        </div>
    );
};

export default NewsHome;