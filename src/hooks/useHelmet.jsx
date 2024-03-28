

import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function useHelmet(pageTitle, imageUrl, description) {
    const location = useLocation();

    useEffect(() => {
        Helmet.defaultProps = {
            ...Helmet.defaultProps,
            title: pageTitle,
            meta: [
                { property: 'og:title', content: pageTitle },
                { property: 'og:image', content: imageUrl },
                { property: 'og:url', content: window.location.href },
                { property: 'og:description', content: description }
            ]
        };

        Helmet.canUseDOM && Helmet.renderStatic();

        return () => {
            Helmet.defaultProps = {};
            Helmet.canUseDOM && Helmet.renderStatic();
        };
    }, [pageTitle, imageUrl, description, location.pathname]);
}

export default useHelmet;
