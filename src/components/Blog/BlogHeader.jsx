import React from 'react';
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

const BlogHeader = ({active}) => {

    const navigate = useNavigate();

    return (
        <div className='container-90 d-flex align-items-center justify-content-between my-3 my-sm-5'>
            <Col>
                <h2 className='fs-max wadik text-dark'>Блог</h2>
            </Col>
            <Col className="wadik d-flex fs-regular gap-3 gap-md-5 justify-content-end">
                <a 
                    role="button" 
                    onClick={() => {
                        (navigate("/blog/videos"))
                    }}
                    style={active === "videos" ? {color: "red", textDecoration: "none"} : {color: "black", textDecoration: "none"}}>
                        Видео
                    </a>
                <a 
                    role="button" 
                    onClick={() => (navigate("/blog/posts"))}
                    style={active === "posts" ? {color: "red", textDecoration: "none"} : {color: "black", textDecoration: "none"}}>
                        Фото+статьи
                    </a>
            </Col>
        </div>
    )
}

export default BlogHeader