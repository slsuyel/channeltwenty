import React, { useState } from 'react';
import { Modal, Button, message, Spin } from 'antd';
import { callApi } from '../../../../utils/functions';
import useLiveVideoUrl from '../../../../hooks/useLiveVideoUrl';
import { LoadingOutlined } from '@ant-design/icons';
const LiveVideo = () => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const { url, loading, refetch } = useLiveVideoUrl();
    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleSubmit = async () => {
        const res = await callApi('post', '/api/live_videos', { title, video_url: videoUrl })
        if (res.title) {
            refetch()
            message.success("live video add")
        }
        else message.error('Something went wrong')
        setVisible(false)
    };

    if (loading) {
        return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />;
    }


    return (
        <div className='border '>
            <h3 className='text-center my-3'>Live Video</h3>
            <div className="flex">
                <div className="flex flex-column gap-2">
                    <Button type="primary" onClick={showModal}>
                        Change Video
                    </Button>


                </div>


                <iframe
                    className='mx-auto '
                    src={url && url.video_url}


                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                    allowFullScreen
                ></iframe>
            </div>

            <Modal
                title="Add Live Video"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>,
                ]}
            >

                <form className="form">
                    <div >
                        <label htmlFor="title">Title:</label>
                        <input className='form-control'

                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="video_url">Video URL:</label>
                        <input className='form-control'
                            type="text"
                            id="video_url"
                            name="video_url"
                            value={videoUrl}
                            onChange={e => setVideoUrl(e.target.value)}
                        />
                    </div>
                </form>
            </Modal>


        </div>
    );
};

export default LiveVideo;
