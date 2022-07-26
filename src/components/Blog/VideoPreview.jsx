import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import $ from "jquery";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const VideoPreview = ({video_name, thumbnail_url, videoId, order}) => {

    const [current, setCurrent] = useState();
    const navigate = useNavigate();
    const imgStyle = {
        backgroundImage: `url("${thumbnail_url}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <Col 
            className={`px-1 px-sm-3 video-preview ${order ? "col-8" : "col-4"}`}
            >
            <div className='h-75 position-relative shadow' id={`${videoId}`}
                onClick={() => navigate(`/blog/videos/${videoId}`)}>
                <div 
                    style={imgStyle}
                    className='w-100 h-100 rounded-3 video-card' 
                    src={thumbnail_url}></div>
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