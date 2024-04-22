// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useCategories from '../../hooks/useCategories';
// import { organizeCategories } from '../../utils/functions';

// import logo from '../../assets/images/logo.png';

// const CategoryCanvas = () => {
//     const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
//     const toggleOffcanvas = () => {

//         if (isOffcanvasOpen) {
//             localStorage.setItem('Offcanvas', 1);
//         } else if (!isOffcanvasOpen) {
//             localStorage.setItem('Offcanvas', 2);
//         }

//         setIsOffcanvasOpen(!isOffcanvasOpen);
//     };
//     const { categories, isLoading } = useCategories();


//     const reArrCategories = categories && organizeCategories(categories);

//     if (isLoading) {
//         return null
//     }


//     return (
//         <div className='bg-body-secondary d-block d-sm-none me-2 text-end news-menubar-mobile'>
//             <button type="button" className="btn btn-danger rounded-0 text-end" onClick={toggleOffcanvas}>
//                 <span className="text-white">
//                     <i className="fa-solid fa-bars-staggered"></i>

//                 </span>
//             </button>

//             <div className={`w-50 offcanvas offcanvas-start${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ background: '#000028', zIndex: '999' }}>
//                 <div className="justify-content-around offcanvas-header p-0 ">
//                     <img src={logo} width={80} alt="" className="img-circle img-fluid m-2" />
//                     <button type="button" className="bg-warning btn-close opacity-100 text-reset" onClick={toggleOffcanvas}></button>
//                 </div>
//                 <div className="offcanvas-body mt-1">



//                     <ul className="list-unstyled">

//                         <li className='border-bottom border-secondary fs-5 mb-2  text-white '>

//                             <Link className='fs-5 mb-2 text-center text-white text-decoration-none'
//                                 to='/news'> প্রচ্ছদ
//                             </Link>
//                         </li>


//                         {
//                             isLoading ? (
//                                 <div>Loading</div>
//                             ) : (
//                                 reArrCategories.map((category) => (
//                                     <li className='border-bottom border-secondary fs-5 mb-2  text-white ' key={category.id}>
//                                         {category.children && category.children.length > 0 ? (
//                                             <div>
//                                                 <span className="dropdown-toggle" data-toggle="dropdown">
//                                                     {category.label}
//                                                 </span>
//                                                 <ul className="dropdown-menu ps-2 bg-gradient" style={{ background: '#000028' }}>

//                                                     {category.children.map((subcategory) => (
//                                                         <li key={subcategory.id}>
//                                                             <Link className='border-bottom border-secondary fs-5 mb-2 text-center text-white text-decoration-none'
//                                                                 to={`/news/category/${subcategory.slug}`} onClick={toggleOffcanvas}>
//                                                                 {subcategory.label}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ) : (
//                                             <Link className=' fs-5 mb-2 text-center text-white text-decoration-none' to={`/news/category/${category.slug}`} onClick={toggleOffcanvas}>
//                                                 {category.label}
//                                             </Link>
//                                         )}
//                                     </li>
//                                 ))
//                             )
//                         }

//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryCanvas;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import { organizeCategories } from '../../utils/functions';

import logo from '../../assets/images/logo.png';

const CategoryCanvas = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const { categories, isLoading } = useCategories();

    const reArrCategories = categories && organizeCategories(categories);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-body-secondary d-block d-sm-none me-2 text-end news-menubar-mobile'>
            <button type="button" className="btn btn-danger rounded-0 text-end" onClick={toggleOffcanvas}>
                <span className="text-white">
                    <i className="fa-solid fa-bars-staggered"></i>
                </span>
            </button>

            <div className={`w-50 offcanvas offcanvas-start${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ background: '#000028', zIndex: '999' }}>
                <div className="justify-content-around offcanvas-header p-0">
                    <img src={logo} width={80} alt="" className="img-circle img-fluid m-2" />
                    <button type="button" className="bg-warning btn-close opacity-100 text-reset" onClick={toggleOffcanvas}></button>
                </div>
                <div className="offcanvas-body mt-1">
                    <ul className="list-unstyled">
                        <li className='border-bottom border-secondary fs-5 mb-2 text-white'>
                            <Link className='fs-5 mb-2 text-center text-white text-decoration-none' to='/news'>প্রচ্ছদ</Link>
                        </li>
                        {reArrCategories.map((category) => (
                            <li className='border-bottom border-secondary fs-5 mb-2 text-white' key={category.id}>
                                {category.children && category.children.length > 0 ? (
                                    <div className="dropdown">
                                        <Link className="dropdown-toggle fs-5 mb-2 text-center text-white text-decoration-none" to="#" role="button" id={`dropdown-${category.id}`} data-bs-toggle="dropdown" aria-expanded="false">
                                            {category.label}
                                        </Link>
                                        <ul className="dropdown-menu ps-2 bg-gradient" aria-labelledby={`dropdown-${category.id}`} style={{ background: '#000028' }}>
                                            {category.children.map((subcategory) => (
                                                <li key={subcategory.id}>
                                                    <Link className='border-bottom border-secondary fs-5 mb-2 text-center text-white text-decoration-none' to={`/news/category/${subcategory.slug}`} onClick={toggleOffcanvas}>
                                                        {subcategory.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link className='fs-5 mb-2 text-center text-white text-decoration-none' to={`/news/category/${category.slug}`} onClick={toggleOffcanvas}>
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
