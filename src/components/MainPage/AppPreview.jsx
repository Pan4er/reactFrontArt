import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import appPreview from "../../assets/app_preview.png";
import googlePlay from "../../assets/image 1.png";
import { Icon } from '@iconify/react';

const AppPreview = () => {
  return (
    <div className='container-90 my-5'>
        <Row>
            <Col className='d-flex flex-wrap align-content-center justify-content-center my-3 my-md-5 gap-3 px-5'>
                <div>
                    <h2 className='wadik text-dark'>Приложение</h2>
                    <h2 className='wadik text-dark'>арт структура</h2>
                </div>
                <p>Бесплатное мобильное приложение для спортивного и ментального развития. Собраны все видео уроки Арт-Структуры с описанием и напоминанием для отдыха.
                </p>
                <p>
                    Также собрана музыка для саморазвития тела и духа.
                </p>
                <a href='https://play.google.com/store/apps/details?id=com.ao.artstructura&hl=ru&gl=US'>
                    <Button className='bg-dark border-0 text-light'>
                        <img src={googlePlay}/>
                        Скачать
                        <Icon className='mx-3' icon="akar-icons:download"/>
                    </Button>
                </a>
            </Col>
            <Col className='col-12 col-md-6'>
                <div className='bg-primary d-flex justify-content-center alignt-items-center py-3 py-md-5 rounded-3'>
                    <img src={appPreview} className="w-25"/>
                </div>
            </Col>

        </Row>
    </div>
  )
}

export default AppPreview