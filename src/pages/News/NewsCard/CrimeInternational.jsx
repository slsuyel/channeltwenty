import React from 'react';
import Col6Card from './Col6Card';
import CrimeCard from './CrimeCard';
import useNewsByCategory from '../../../hooks/useNewsByCategory';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';

const CrimeInternational = () => {
    const { data: internationalData, loader: internationalLoader } = useNewsByCategory('international');
    const { data: crimeData, loader: crimeLoader } = useNewsByCategory('crime');

    if (internationalLoader || crimeLoader) {
        return <SkeletonLoader />
    }


    return (
        <div className='row w-100 mx-auto  my-1 '>
            <CrimeCard data={crimeData} />
            <Col6Card data={internationalData} title={'আন্তর্জাতিক'} />
        </div>
    );
};

export default CrimeInternational;
