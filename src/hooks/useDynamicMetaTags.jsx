import React, { useLayoutEffect } from 'react';

export const useDynamicMetaTags = ({ title, content, imageUrl, pageUrl }) => {
    useLayoutEffect(() => {
        const updateMetaTags = () => {
            document.title = title;
            document.querySelector('meta[property="og:title"]').setAttribute("content", title);
            document.querySelector('meta[property="og:description"]').setAttribute("content", content);
            document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl);
            document.querySelector('meta[property="og:url"]').setAttribute("content", pageUrl);
        };

        updateMetaTags();
    }, [title, content, imageUrl, pageUrl]);
};

