import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import $ from "jquery";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const VideoPreview = ({video_name, thumbnail_url, videoId}) => {

    const [current, setCurrent] = useState();
    const navigate = useNavigate();

    return (
        <Col 
            className='col-4 px-1 px-sm-3'
            >
            <div className='h-75 position-relative shadow' id={`${videoId}`}
                onClick={() => navigate(`/blog/videos/${videoId}`)}>
                <img 
                    className='w-100 h-100 rounded-3 video-card' 
                    src={thumbnail_url}/>
                {
                    current === videoId ? 
                    <Icon icon="dashicons:video-alt3"/> :
                    <></>
                }
            </div>
            <p className='fs-small rockstar my-0 fw-bold text-truncate'>{video_name}</p>
        </Col>
    )
}

export default VideoPreview