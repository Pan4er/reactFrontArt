import { Icon } from '@iconify/react';
import React, { useContext, useEffect } from 'react';
import BlogHeader from '../components/Blog/BlogHeader';
import MainHeader from "../components/MainHeader";
import { allContext } from '../context/AllContext';
import { Row } from "react-bootstrap";
import PostPreview from '../components/Blog/PostPreview';

const AllPosts = () => {

    const { GetAllPosts, GetNextPosts, posts, limit } = useContext(allContext);
    let order = false
    let anchor = null

    console.log(limit)

    useEffect(() => {
        GetAllPosts();
    }, [])

    if(!posts) {
        return (
            <div className='w-100 loading d-flex justify-content-center align-items-center'>
                <Icon icon="line-md:loading-loop" style={{color: "red", fontSize: "96px"}}/>
            </div>
        )
    }

    return (
        <>  
            <MainHeader/>
            <div className='bg-big'></div>
            <BlogHeader active="posts"/>
            <div  className='container-90 d-flex flex-column justify-content-center'>
                <Row className='w-100 m-0'>
                    {
                        posts.map((post, i) => {
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
                            return <PostPreview
                                    post_imageUrl={post.post_imageUrl}
                                    post_name={post.post_name}
                                    postId={post.id}
                                    post_date={post.post_date}
                                    order={order}
                                    />
                        })
                    }
                </Row>
                <div 
                    role="button" 
                    className='d-flex justify-content-center my-3'
                    onClick={() => GetNextPosts(limit)}>
                    <h2 className='fs-max border-bottom border-4 border-dark'>
                        Загрузить больше
                    </h2>
                </div>
            </div>
        </>
    )
}

export default AllPosts