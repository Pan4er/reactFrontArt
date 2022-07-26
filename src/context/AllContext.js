import React, { createContext, useReducer } from 'react';
import axios from "axios";

const INIT_STATE = {
    videos: null,
    video: null,
    limit: 6,
    posts: null,
    post: null,
    error: false
}


const REDUCER = (state, action) => {
    switch(action.type) {
        case "GET_ALL_VIDEOS":
            return {
                ...state,
                videos: action.payload.videos,
            }
        case "GET_VIDEO":
            return {
                ...state,
                video: action.payload
            }
        case "GET_ALL_POSTS":
            return {
                ...state,
                posts: action.payload.posts,
            }
        case "GET_POST":
            return {
                ...state,
                post: action.payload
            }
        case "ERROR":
            return {
                ...state,
                error: true
            }
        case "SET_LIMIT":
            return {
                ...state,
                limit: action.payload.limit
            }
        default: return state;
    }
}

export const allContext = createContext();

const AllContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(REDUCER, INIT_STATE);

    const GetAllVideos = async () => {
        const videosList = [];
        await axios.get("https://toyyotbackend.ru/videos/6")
        .then(res => res.data.videos.forEach(video => videosList.push(video)))
        .catch(err => console.log(err))
        dispatch({
            type: "GET_ALL_VIDEOS",
            payload: {
                videos: videosList
            }
        })
    }

    const GetVideo = async (id) => {
        await axios.get(`https://toyyotbackend.ru/videos/id/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: "GET_VIDEO",
                payload: res.data.video
            })
        })
        .catch(err => console.log(err))
    }

    const GetNextVideos = async (lim) => {
        let newLimit = parseInt(lim) + 6;
        newLimit = newLimit.toString();
        const videosList = [];
        await axios.get(`https://toyyotbackend.ru/videos/${newLimit}`)
        .then(res => res.data.videos.forEach(video => videosList.push(video)))
        .catch(err => console.log(err))
        dispatch({
            type: "GET_ALL_VIDEOS",
            payload: {
                videos: videosList
            }
        })
        dispatch({
            type: "SET_LIMIT",
            payload: {
                limit: newLimit
            }
        })
    }

    const GetNextPosts = async (lim) => {
        let newLimit = parseInt(lim) + 6;
        newLimit = newLimit.toString();
        const postsList = [];
        await axios.get(`https://toyyotbackend.ru/websitePosts/${newLimit}`)
        .then(res => res.data.posts.forEach(post => postsList.push(post)))
        .catch(err => console.log(err))
        dispatch({
            type: "GET_ALL_POSTS",
            payload: {
                posts: postsList
            }
        })
        dispatch({
            type: "SET_LIMIT",
            payload: {
                limit: newLimit
            }
        })
    }

    const GetAllPosts = async () => {
        const postsList = [];
        await axios.get("https://toyyotbackend.ru/websitePosts/6")
        .then(res => {
            res.data.posts.forEach(post => postsList.push(post))
        })
        .catch(err => console.log(err))
        dispatch({
            type: "GET_ALL_POSTS",
            payload: {
                posts: postsList
            }
        })
    }

    const GetPost = async (id) => {
        await axios.get(`https://toyyotbackend.ru/websitePosts/id/${id}`)
        .then(res => {
            
            dispatch({
                type: "GET_POST",
                payload: res.data
            })
        })
        .catch(err => console.log(err))
    }

    return (
        <allContext.Provider value={{
            videos: state.videos,
            video: state.video,
            lastVideo: state.lastVideo,
            posts: state.posts,
            post: state.post,
            lastPost: state.lastPost,
            limit: state.limit,
            GetAllVideos,
            GetVideo,
            GetNextVideos,
            GetAllPosts,
            GetPost,
            GetNextPosts
        }}>
            {children}
        </allContext.Provider>
    )
}

export default AllContextProvider