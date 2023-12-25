import React from 'react';
import Col6Card from './Col6Card';
import CrimeCard from './CrimeCard';

const CrimeInternational = () => {
    return (
        <div className='row w-100 mx-auto'>
            <CrimeCard />
            <Col6Card tittle={'আন্তর্জাতিক'} />
        </div>
    );
};

export default CrimeInternational;