import React from 'react';
import NewsTrigger from './NewsTrigger';
import CategoryNavbar from './CategoryNavbar';

const NewsHome = () => {
    return (
        <div>
            <CategoryNavbar />
            <NewsTrigger />
        </div>
    );
};

export default NewsHome;