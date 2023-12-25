import React from 'react';
import NewsTrigger from './NewsTrigger';
import CategoryNavbar from './CategoryNavbar';
import CategoryCanvas from './CategoryCanvas';
import UpdateNews from './NewsCard/UpdateNews';
import MiddleCard from './NewsCard/MiddleCard';
import CrimeInternational from './NewsCard/CrimeInternational';
import ElectionNewsCard from './NewsCard/ElectionNewsCard';

const NewsHome = () => {
    return (
        <div>
            <CategoryNavbar />
            <CategoryCanvas />
            <NewsTrigger />
            <UpdateNews />
            <MiddleCard />
            <CrimeInternational />
            <ElectionNewsCard />
        </div>
    );
};

export default NewsHome;