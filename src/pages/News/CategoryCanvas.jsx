import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        label: 'প্রচ্ছদ',
        name: 'cover',
    },
    {
        label: 'নিউজ',
        name: 'news',
    },
    {
        label: 'জাতীয়',
        name: 'national',

    },
    {
        label: 'নির্বাচন সংবাদ',
        name: 'election-news'
    }
    ,
    {
        label: 'বাংলাদেশ',
        name: 'bangladesh',
        subcategories: [
            { label: 'আইন আদালত', name: 'court-of-law' },
            { label: 'রাজনীতি', name: 'politics' },
        ],
    },
    {
        label: 'অর্থনীতি',
        name: 'economy',
        subcategories: [
            { label: 'পুজিবাজার', name: 'capital-market' },
            { label: 'বানিজ্য', name: 'business-news' },
        ],
    },
    {
        label: 'আন্তর্জাতিক সংবাদ',
        name: 'international',
        subcategories: [
            { label: 'ওপার বাংলা', name: 'west-bengal' },
        ],
    },
    {
        label: 'খেলাধুলা',
        name: 'sports',
        subcategories: [
            { label: 'ক্রিকেট', name: 'cricket' },
            { label: 'ফুটবল', name: 'football' },
        ],
    },
    {
        label: 'অপরাধ',
        name: 'crime',
        subcategories: [
            { label: 'আটক', name: 'arrested' },
            { label: 'দুর্নীতি', name: 'corruption' },
            { label: 'দুর্ভোগ', name: 'suffering' },
            { label: 'ধর্ষণ', name: 'rape' },
            { label: 'সংঘর্ষ', name: 'conflict' },
        ],
    },
    {
        label: 'অন্যান্য',
        name: 'others',
        subcategories: [
            { label: 'কৃষি সংবাদ', name: 'agricultural-news' },
            { label: 'মানবতা ও উদারতা', name: 'humanity-and-generosity' },
            { label: 'আত্মহত্যা', name: 'suicide' },
            { label: 'আবহাওয়া', name: 'weather' },
            { label: 'দুর্ঘটনা', name: 'accident' },
            { label: 'বিনোদন', name: 'entertainment' },
            { label: 'শিক্ষা ও বিজ্ঞান', name: 'education-and-science' },
            { label: 'স্বাস্থ্য সমাচার', name: 'health-news' },
        ],
    },
    {
        label: 'ভিডিও',
        name: 'video',
    },
];

const CategoryCanvas = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <div className='bg-body-secondary d-block d-sm-none me-2 text-end'>
            <button type="button" className="btn btn-primary rounded-0 text-end" onClick={toggleOffcanvas}>
                <span className="text-white"><i className="fa-solid fa-bars"></i></span>
            </button>

            <div className={`w-50 offcanvas offcanvas-start${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ background: '#000028' }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                    <button type="button" className="bg-warning btn-close opacity-100 text-reset" onClick={toggleOffcanvas}></button>
                </div>
                <div className="offcanvas-body">

                    <div>

                        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_176,h_174/https://www.channeltwenty.com/wp-content/uploads/2022/10/cropped-Untitled-1.jpg" alt="" className="img-circle img-fluid m-2" />
                    </div>


                    <ul className="list-unstyled">
                        {categories.map((category) => (
                            <li className='border-bottom border-secondary fs-5 mb-2  text-white ' key={category.name}>
                                {category.subcategories && category.subcategories.length ? (
                                    <div>
                                        <span className="dropdown-toggle" data-toggle="dropdown">
                                            {category.label}
                                        </span>
                                        <ul className="dropdown-menu ps-2 bg-gradient" style={{ background: '#000028' }}>
                                            {category.subcategories.map((subcategory) => (
                                                <li key={subcategory.name}>
                                                    <Link className='border-bottom border-secondary fs-5 mb-2 text-center text-white text-decoration-none' to={`/${category.name}/${subcategory.name}`} onClick={toggleOffcanvas}>
                                                        {subcategory.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link className=' fs-5 mb-2 text-center text-white text-decoration-none' to={`/${category.name}`} onClick={toggleOffcanvas}>
                                        {category.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryCanvas;
