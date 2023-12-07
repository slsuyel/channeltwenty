import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryProgram = () => {

    const { category } = useParams();

    return (
        <div>
            <h2 className='mx-2 primary-bg py-1 rounded-3 text-center text-white mb-2'>{category ? category : ''}

            </h2>

            <div className='row w-100 mx-auto'>
                <div className='col-md-4 my-2'>
                    <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='col-md-4 my-2'>
                    <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='col-md-4 my-2'>
                    <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='col-md-4 my-2'>
                    <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='col-md-4 my-2'>
                    <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='col-md-4 my-2'>
                    <iframe className='rounded rounded-4 w-100' width="380" height="200" src="https://www.youtube.com/embed/4Q6Yn1LpIBI?si=XoRdak8HA9YLKBop&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>



            </div>


        </div>

    );
};

export default CategoryProgram;