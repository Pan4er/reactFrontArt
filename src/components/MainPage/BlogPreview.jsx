import React from 'react';
import blog1 from "../../assets/blog_preview1.png";
import blog2 from "../../assets/blog_preview2.png";
import blog3 from "../../assets/blog_preview3.png";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const BlogPreview = () => {

    const navigate = useNavigate();

    return (
        <div className='w-100 bg-primary rockstar my-3'>
            <div className='container-90 py-3'>
                <h2 className='fs-max text-light my-3'>Блог</h2>
                <Row>
                    <Col className='col-12 my-4'>
                        <img src={blog1} className="w-100"/>
                        <div className='d-flex gap-5 my-3'>
                            <h6 className='text-dark fw-bold'>Восстановление</h6>
                            <p className='text-light d-none d-sm-block'>Восстановление связок коленного сустава</p>
                        </div>
                    </Col>
                    <Col>
                        <img src={blog2} className="w-100"/>
                        <div className='d-flex gap-5 my-3'>
                            <h6 className='text-dark fw-bold'>Координация</h6>
                            <p className='text-light d-none d-sm-block'>Челлендж</p>
                        </div>
                    </Col>
                    <Col>
                        <img src={blog3} className="w-100"/>
                        <div className='d-flex gap-5 my-3'>
                            <h6 className='text-dark fw-bold'>Тренировка</h6>
                            <p className='text-light d-none d-sm-block'>Тренировка для боксера</p>
                        </div>
                    </Col>
                    <div className='d-flex justify-content-center'>
                        <Button 
                            onClick={() => navigate("/blog/videos")}
                            className='fs-btn text-primary bg-light rounded-pill w-md-25 p-2 p-sm-3 wadik'>
                            Больше видео
                        </Button>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default BlogPreview