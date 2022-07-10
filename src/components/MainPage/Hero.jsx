import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HeroImage from "../../assets/hero_image.png";

const Hero = () => {

    const navigate = useNavigate();

    return (
      <>
        <div className='bg-red-tail bg-image' style={{top: "0"}}></div>
        <div className='container-90 text-light'>
          <Row className='my-3 my-sm-5'>
            <Col>
              <h2 className='fs-max wadik'>Исскусство движений</h2>
            </Col>
            <Col className='d-flex align-items-end justify-content-end'>
              <p className='rockstar d-none d-sm-block fs-regular'>Личный блог о том, как стать лучше</p>
            </Col>
          </Row>
          <div className='position-relative'>
            <img src={HeroImage} className="w-100"/>
            <button 
              onClick={() => navigate("/blog/posts")}
              className='fs-btn btn-main text-primary zindex-offcanvas start-50 translate-middle rounded-pill'>
                Читать Блог
            </button>
          </div>
        </div>
      </>
    )
}

export default Hero