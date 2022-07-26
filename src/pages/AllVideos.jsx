import { Icon } from '@iconify/react';
import React, { useContext, useEffect } from 'react';
import BlogHeader from '../components/Blog/BlogHeader';
import VideoPreview from '../components/Blog/VideoPreview';
import MainHeader from "../components/MainHeader";
import { allContext } from '../context/AllContext';
import { Row } from "react-bootstrap";
import { useState } from 'react';

const AllVideos = () => {

    const { GetAllVideos, GetNextVideos, videos, limit } = useContext(allContext);
    let order = false
    let anchor = null

    useEffect(() => {
        GetAllVideos();
    }, [])

    if(!videos) {
        return (
            <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                <Icon icon="line-md:loading-loop" style={{color: "red", fontSize: "96px"}}/>
            </div>
        )
    }

    return (
        <>  
            <MainHeader/>
            <div className='bg-big'></div>
            <BlogHeader active="videos"/>
            <div  className='container-90 d-flex flex-column justify-content-center'>
                <Row className='w-100 m-0'>
                    {
                        videos.map((video, i) => {
                            if(anchor && i >= anchor + 2) {
                                order = !order
                                anchor = i
                            }
                            if(anchor === 1) {
                                order = true
                            }
                            if(!order && i === 0) {
                                anchor = 1
                            }
                            return <VideoPreview
                                    thumbnail_url={video.thumbnail_url}
                                    video_name={video.video_name}
                                    videoId={video.id}
                                    order={order}/>
                        })
                    }
                </Row>
                <div 
                    role="button" 
                    className='d-flex justify-content-center my-3'
                    onClick={() => GetNextVideos(limit)}>
                    <h2 className='fs-max border-bottom border-4 border-dark'>
                        Загрузить больше
                    </h2>
                </div>
            </div>
        </>
    )
}

export default AllVideos