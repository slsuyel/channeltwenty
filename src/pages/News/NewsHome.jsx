import React from 'react';
import NewsTrigger from './NewsTrigger';
import MiddleCard from './NewsCard/MiddleCard';
import CrimeInternational from './NewsCard/CrimeInternational';
import ElectionNewsCard from './NewsCard/ElectionNewsCard';
import EduSportsEconomy from './EduSportsEconomy';
import UpdateNewsSlider from './UpdateNewsSlider';

const NewsHome = () => {
    return (
        <div>

            <NewsTrigger />
            <UpdateNewsSlider />
            <MiddleCard />
            <CrimeInternational />
            <ElectionNewsCard />
            <EduSportsEconomy />
        </div>
    );
};

export default NewsHome;