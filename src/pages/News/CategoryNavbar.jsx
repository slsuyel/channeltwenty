import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import useCategories from '../../hooks/useCategories';
import { organizeCategories } from '../../utils/functions';

const CategoryNavbar = () => {
    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return null
    }

    const reArrCategories = organizeCategories(categories);

    return (
        <nav className="d-none d-sm-block d-md-block fs-5 navbar-expand-lg p-0 pt-0 px-4 " style={{ background: '#000028' }}>
            <ul className="justify-content-evenly navbar-nav w-100">

                <li className="nav-item" >
                    <Link className='nav-link text-white'
                        to='/news'> প্রচ্ছদ
                    </Link>
                </li>

                {reArrCategories.map((category) => (
                    <li className="nav-item" key={category.slug}>
                        {category.children && category.children.length > 0 ? (

                            <Dropdown>
                                <Dropdown.Toggle style={{ fontSize: '20px' }} className='bg-transparent border-0' id={`dropdown-${category.slug}`}>
                                    {category.label}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {category.children.map((subcategory) => (
                                        <Dropdown.Item key={subcategory.slug}>
                                            <Link className="dropdown-item "
                                                to={`/news/category/${subcategory.slug}`}>
                                                {/* to={`/category/${category.slug}/${subcategory.slug}`}> */}
                                                {subcategory.label}
                                            </Link>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Link className="nav-link text-white" to={`/news/category/${category.slug}`}>
                                {category.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryNavbar;
