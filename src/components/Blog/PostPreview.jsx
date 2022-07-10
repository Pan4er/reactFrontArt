import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import $ from "jquery";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const PostPreview = ({post_name, post_imageUrl, post_date, postId}) => {

    const [current, setCurrent] = useState();
    const navigate = useNavigate();
    console.log(post_date)

    return (
        <Col 
            className='col-4 px-1 px-sm-3 my-3 my-sm-5'
            >
            <div className='h-75 position-relative shadow' id={`${postId}`}
                onClick={() => navigate(`/blog/posts/${postId}`)}>
                <img 
                    className='w-100 h-100 rounded-3 video-card' 
                    src={post_imageUrl}/>
                {
                    current === postId ? 
                    <Icon icon="dashicons:video-alt3"/> :
                    <></>
                }
            </div>
            <div className='d-flex flex-column justify-content-between'>
                <p className='fs-small m-0'>{post_date}</p>
                <p className='fs-small rockstar my-0 fw-bold text-truncate'>{post_name}</p>
            </div>
        </Col>
    )
}

export default PostPreview