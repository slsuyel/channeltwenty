import React from 'react';
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

    }, {
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

const CategoryNavbar = () => {
    return (
        <nav className="d-none d-sm-block d-md-block fs-5 navbar-expand-lg p-0 pt-0 px-4" style={{ background: '#000028' }}>

            <button className="navbar-toggler pt-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon "></span> */}
                <span className="fs-1 text-white"><i className="fa-solid fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="justify-content-evenly navbar-nav w-100">
                    {categories.map((category) => (
                        <li className="nav-item " key={category.name}>
                            {category.subcategories && category.subcategories.length ? (
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" to={`/${category.name}`} id={`${category.name}Dropdown`} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {category.label}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby={`${category.name}Dropdown`}>
                                        {category.subcategories.map((subcategory) => (
                                            <Link className="dropdown-item" to={`/${category.name}/${subcategory.name}`} key={subcategory.name}>
                                                {subcategory.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link className="nav-link text-white" to={`/${category.name}`}>
                                    {category.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default CategoryNavbar;
