import React, { useState } from 'react';

const LiveVideo = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <div className='container-fluid my-4'>
            <div className='d-flex justify-content-center'>
                {!videoLoaded && (
                    <div>
                        <p className='text-center'>Live TV Loading.... Please wait a moment</p>
                        <img src="https://cdn.dribbble.com/users/24885/screenshots/1286944/video_camera_loader.gif" alt="" />
                    </div>
                )}

                <div
                    style={{
                        display: videoLoaded ? 'block' : 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        paddingTop: '56.25%',
                        width: '90%'
                    }}
                >
                    <iframe
                        onLoad={handleVideoLoad}
                        className='mx-auto'
                        width="1000"
                        height="555"
                        src="https://www.youtube.com/embed/dmGprO-4k5I?autoplay=1&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%'
                        }}

                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default LiveVideo;
