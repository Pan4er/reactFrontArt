import React from 'react';
import { Row, Col } from "react-bootstrap";
import infoHeroSm from "../../assets/info_hero_sm.png";

const Info = () => {
  return (
    <div className='container-90 my-5'>
        <Row className='d-flex justify-content-center m-0'>
            <Row className='my-3'>
                <Col className='col-6'>
                    <h2 className='text-primary text-start fs-max'>ART STRUCTURA</h2>
                </Col>
                <Col className='d-none d-sm-flex align-items-end'>
                    <p className='text-primary fs-regular text-end'>Исскуство структурирования движений по назначению.</p>
                </Col>
            </Row>
            <Row className='bg-grey'>
                <Col className='col-8 d-flex flex-wrap align-content-around'>
                    <p className='text-primary fs-regular'>Здравствуйте, меня зовут Артур. 
                        Я автор методики Art_Structura, искусство структурирования движений по назначению, что является плодом моего 30 летнего опыта тренерской работы. 
                    </p>
                    <p className='text-primary fs-regular'>
                        Провожу работу с профспортсменами в 18 видах спорта, функциональная подготовка является одной из ключевых задач.
                    </p>
                    <p className='text-primary fs-regular mt-2 mt-sm-4'>Артур Буздов</p>
                </Col>
                <Col className='col-4 p-0'>
                    <img src={infoHeroSm} className="w-100 rounded"/>
                </Col>
            </Row>
        </Row>
        <Row className='d-flex justify-content-center m-0'>
            <Col className='col-6 w-100'>
                <h2 className='text-primary text-start fs-max my-3'>ИССКУСТВО В ЦИФРАХ</h2>
            </Col>
            <Row className='text-primary justify-content-center text-center '>
                <Col className='col-5 col-md-3 bg-grey m-1 m-md-4'>
                    <h2 className='fs-superbig'>30</h2>
                    <p>Лет опыта тренерской работы</p>
                </Col>
                <Col className='col-5 col-md-3 bg-grey m-1 m-md-4'>
                    <h2 className='fs-superbig'>50+</h2>
                    <p>Научных публикаций</p>
                </Col>
                <Col className='col-10 col-md-3 bg-grey m-1 m-md-4'>
                    <h2 className='fs-superbig'>22</h2>
                    <p>Спортсмена мирового уровня доверяют моей методике</p>
                </Col>
            </Row>
        </Row>
    </div>
  )
}

export default Info