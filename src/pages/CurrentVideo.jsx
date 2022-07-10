import React, { useContext, useEffect, useState } from 'react'
import { allContext } from '../context/AllContext'
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import MainHeader from '../components/MainHeader';
import VideoPreview from '../components/Blog/VideoPreview';
import { useNavigate } from "react-router-dom";

const CurrentVideo = () => {

    const params = useParams();
    const { GetAllVideos, GetVideo, video, videos } = useContext(allContext);
    const [videoId, setVideoId] = useState(params.videoId);
    const navigate = useNavigate();

    useEffect(() => {
        GetVideo(params.videoId);
        GetAllVideos();
        window.scrollTo(0, 0)
    }, [params.videoId])
    
    if(!video || !videos) {
        return (
            <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                <Icon icon="line-md:loading-loop" style={{color: "red", fontSize: "96px"}}/>
            </div>
        )
    }
    
    return (
        <>
            <MainHeader/>
            <div className='container-90'>
                <div   
                    style={{width: "max-content"}}
                    className='d-flex align-items-center gap-3 fs-max wadik text-dark'
                    role="button"
                    onClick={() => navigate("/blog/videos")}>
                    <Icon icon="eva:arrow-back-fill"/>
                    <h2 className='fs-max'>Блог</h2>
                </div>
                <div className='video-size embed-responsive embed-responsive-4by3 d-flex justify-content-center flex-column'>
                    <iframe 
                        className='embed-responsive-item rounded-2 h-100' 
                        src={video.video_url}
                        allowFullScreen>
                    </iframe>
                    <strong className='fs-regular my-2 my-sm-3'>{video.video_name}</strong>
                </div>
                <div>
                    <p className='fs-regular my-4 my-sm-5'>{video.video_description}</p>
                </div>
                <div>
                    <h2 className='fs-max'>Другие видео</h2>
                    <div className='d-flex'>
                        {
                            videos.map((vid, i) => {
                                if(vid.id === params.videoId || i >= 3) {
                                    return <></>
                                } else {
                                    return <VideoPreview 
                                                key={vid.id}
                                                thumbnail_url={vid.thumbnail_url}
                                                video_name={vid.video_name}
                                                videoId={vid.id}
                                                />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default CurrentVideo