import React, { useContext, useEffect, useState } from 'react'
import { allContext } from '../context/AllContext'
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import MainHeader from '../components/MainHeader';
import PostPreview from '../components/Blog/PostPreview';
import { useNavigate } from "react-router-dom";
import MyText from '../components/MyText';

const CurrentPost = () => {

    const params = useParams();
    const { GetAllPosts, GetPost, post, posts } = useContext(allContext);
    // const [videoId, setVideoId] = useState(params.videoId);
    const navigate = useNavigate();

    useEffect(() => {
        GetPost(params.postId);
        GetAllPosts();
        window.scrollTo(0, 0)
    }, [params.postId])
    
    if(!post || !posts) {
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
                    onClick={() => navigate("/blog/posts")}>
                    <Icon icon="eva:arrow-back-fill"/>
                    <div className='d-flex align-items-center'>
                        <h2 className='fs-max me-5'>Блог</h2>
                        <strong className='fs-regular my-2 my-sm-3'>{post.post_name}</strong>
                    </div>
                </div>
                <img className='w-100' src={post.post_imageUrl}/>
                <div>
                    <h4 className='fs-regular fw-bold'>{post.post_header}</h4>
                    <MyText stringProp={post.post_text}/>
                </div>
                <div>
                    <h2 className='fs-max'>Другие статьи</h2>
                    <div className='d-flex'>
                        {
                            posts.map((item, i) => {
                                if(item.id === params.postId || i >= 3) {
                                    return <></>
                                } else {
                                    return <PostPreview 
                                                key={item.id}
                                                post_imageUrl={item.post_imageUrl}
                                                post_name={item.post_name}
                                                postId={item.id}
                                                post_date={item.post_date}
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

export default CurrentPost