import React from 'react';
import SportsNews from './NewsCard/SportsNews';
import SidebarCard from './NewsCard/SidebarCard';
import useNewsByCategory from '../../hooks/useNewsByCategory';
import SkeletonLoader from '../../components/Utilites/SkeletonLoader';

const EduSportsEconomy = () => {

    const { data, loader } = useNewsByCategory('ecomomics');
    const { data: datas, loader: loaders } = useNewsByCategory('siksha-oo-bijngan');

    if (loader || loaders) {
        return <SkeletonLoader />
    }

    return (
        <div className='row w-100 mx-auto my-1 '>
            <SidebarCard data={datas} tittle={'শিক্ষা, বিজ্ঞান ও প্রযুক্তি'} />
            <SportsNews />
            <SidebarCard data={data} tittle={'অর্থনীতি'} />
        </div>
    );
};

export default EduSportsEconomy;