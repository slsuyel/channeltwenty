import React from 'react';
import NewsTrigger from './NewsTrigger';
import CategoryNavbar from './CategoryNavbar';
import CategoryCanvas from './CategoryCanvas';

const NewsHome = () => {
    return (
        <div>
            <CategoryNavbar />
            <CategoryCanvas />
            <NewsTrigger />
        </div>
    );
};

export default NewsHome;