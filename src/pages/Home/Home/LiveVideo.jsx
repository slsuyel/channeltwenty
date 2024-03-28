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
                        paddingTop: '50.25%',
                        width: '90%'
                    }}
                >
                    <iframe
                        onLoad={handleVideoLoad}
                        className='mx-auto'
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/moQtMet7F7w?si=xGROhaNReRUKmwPJ?autoplay=1&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            height: '80%'
                        }}

                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default LiveVideo;
