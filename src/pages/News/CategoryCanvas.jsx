import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import { organizeCategories } from '../../utils/functions';



const CategoryCanvas = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };
    const { categories, isLoading } = useCategories();

    if (isLoading) {
        return <p>Navbar Loading</p>;
    }

    const reArrCategories = organizeCategories(categories);




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
                        {reArrCategories.map((category) => (
                            <li className='border-bottom border-secondary fs-5 mb-2  text-white ' key={category.name}>
                                {category.children && category.children.length > 0 ? (
                                    <div>
                                        <span className="dropdown-toggle" data-toggle="dropdown">
                                            {category.label}
                                        </span>
                                        <ul className="dropdown-menu ps-2 bg-gradient" style={{ background: '#000028' }}>
                                            {category.children.map((subcategory) => (
                                                <li key={subcategory.name}>
                                                    <Link className='border-bottom border-secondary fs-5 mb-2 text-center text-white text-decoration-none'
                                                        to={`/category/${subcategory.slug}`} onClick={toggleOffcanvas}>
                                                        {subcategory.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link className=' fs-5 mb-2 text-center text-white text-decoration-none' to={`/category/${category.slug}`} onClick={toggleOffcanvas}>
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
