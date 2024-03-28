import React from 'react';
import SportsNews from './NewsCard/SportsNews';
import SidebarCard from './NewsCard/SidebarCard';
import useNewsByCategory from '../../hooks/useNewsByCategory';
import SkeletonLoader from '../../components/Utilites/SkeletonLoader';

const EduSportsEconomy = () => {

    const { data, loader } = useNewsByCategory('ecomomics');

    if (loader) {
        return <SkeletonLoader />
    }

    return (
        <div className='row w-100 mx-auto'>
            <SidebarCard data={data} tittle={'শিক্ষা, বিজ্ঞান ও প্রযুক্তি'} />
            <SportsNews />
            <SidebarCard data={data} tittle={'অর্থনীতি'} />
        </div>
    );
};

export default EduSportsEconomy;