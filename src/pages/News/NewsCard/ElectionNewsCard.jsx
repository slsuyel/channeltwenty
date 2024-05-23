import React from 'react';
import Col6Card from './Col6Card';
import NewsTab from '../NewsTab';
import SidebarCard from './SidebarCard';
import useNewsByCategory from '../../../hooks/useNewsByCategory';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';

const ElectionNewsCard = () => {

    const { data: newsData, loader: newsLoader } = useNewsByCategory('news');
    const { data, loader } = useNewsByCategory('election-news');

    if (newsLoader || loader) {
        return <SkeletonLoader />
    }


    return (
        <div className='row w-100 mx-auto my-3'>
            <SidebarCard data={data} tittle={'নির্বাচন সংবাদ'} />

            <Col6Card title={'নিউজ'} data={newsData} />

            <div className='col-md-3'>
                <NewsTab />
            </div>
        </div>
    );
};

export default ElectionNewsCard;