import React from 'react';
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className='w-100 bg-dark text-light py-3 py-sm-5 px-3 px-sm-4 align-items-center m-0'>
        <Col className='col-12 col-md-3 my-3 my-md-0'>
            <h2 className='inter fw-bold text-center text-md-start'>ART STRUCTURA</h2>
        </Col>
        <Col className='d-flex row gap-3 gap-md-5'>
            <a style={{cursor: "pointer", textDecoration: "none", color: "white"}} className="fs-regular" href="/about-us">О методике</a>
            
            <a style={{cursor: "pointer", textDecoration: "none", color: "white"}} className="fs-regular" href="/contacts">Контакты</a>
        </Col>
        <Col className='d-flex row gap-3 gap-md-5'>
            <a style={{cursor: "pointer", textDecoration: "none", color: "white"}} className="fs-regular" href="https://vk.com/art_structura">Вконтакте</a>
            
            <a style={{cursor: "pointer", textDecoration: "none", color: "white"}} className="fs-regular" href="https://t.me/art_structura1">Telegram</a>
        </Col>
        <Col className='d-flex row'>
            <p className="fs-regular border-bottom border-light w-75 py-2">Адреса</p>
            <p className="fs-regular" style={{lineHeight: "20px"}}>113, пр-т. Энгельса, корп. 1, г. Санкт-Петербург, 194354</p>
        </Col>
    </Row>
  )
}

export default Footer