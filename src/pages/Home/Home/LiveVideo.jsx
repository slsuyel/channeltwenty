import React, { useState, useEffect } from 'react';
import { callApi } from '../../../utils/functions';

const LiveVideo = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [url, setUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLiveVideo = async () => {
            try {
                const response = await callApi("GET", `/api/live_video/last`);
                console.log(response);
                setUrl(response.video_url);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching live video:', error);
                setIsLoading(false);
            }
        };

        fetchLiveVideo();

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addListener(handleResize);

        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);

    const videoWidth = isMobile ? '100%' : '80%';
    const videoHeight = isMobile ? '100%' : '80%';

    console.log(url);

    return (
        <div className='my-2'>
            <div className='d-flex justify-content-center'>
                {isLoading ? (
                    <div>
                        <p className='text-center'>Live TV Loading.... Please wait a moment</p>
                        <img src="https://cdn.dribbble.com/users/24885/screenshots/1286944/video_camera_loader.gif" alt="Loading" />
                    </div>
                ) : (
                    <div
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            paddingTop: '50.25%',
                            width: '90%'
                        }}
                    >
                        <iframe
                            className='mx-auto'
                            width={videoWidth}
                            height={videoHeight}
                            src={url ? `${url}?autoplay=1&controls=1` : ''}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LiveVideo;
