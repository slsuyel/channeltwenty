import React from 'react';
import { Link } from 'react-router-dom';

const Paginate = ({ Totalpageprops, totalitems, per_page, route }) => {
    const getPageUrl = (pag) => {
        if (pag.url) {
            const pageValue = pag.url.split('?')[1].split('=')[1];
            // return `/dashboard/student?perpage=${per_page}&page=${pageValue}`;
            return `${route}?perpage=${per_page}&page=${pageValue}`;
        }
        return null;
    };

    return (
        <div>
            {totalitems > per_page && (
                <nav aria-label="Page navigation example">
                    <ul className="pagination  justify-content-end">
                        {Totalpageprops.map((pag, index) => (
                            <React.Fragment key={`p${index}`}>
                                {index === 0 && pag.url ? (
                                    <li className="page-item">
                                        <Link className="page-link" to={getPageUrl(pag)} dangerouslySetInnerHTML={{ __html: pag.label }} />
                                    </li>
                                ) : null}
                                {index !== 0 && pag.label !== 'Next &raquo;' ? (
                                    <li className={`page-item ${pag.active ? 'active' : ''} ${pag.label === '...' ? 'disabled' : ''}`}>
                                        <Link className="page-link" to={getPageUrl(pag)} dangerouslySetInnerHTML={{ __html: pag.label }} />
                                    </li>
                                ) : null}
                                {pag.label === 'Next &raquo;' && pag.url ? (
                                    <li className="page-item">
                                        <Link className="page-link" to={getPageUrl(pag)} dangerouslySetInnerHTML={{ __html: pag.label }} />
                                    </li>
                                ) : null}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Paginate;