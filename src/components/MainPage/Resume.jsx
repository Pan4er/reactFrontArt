import React from 'react';
import resume from "../../assets/resume.png";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Resume = () => {

    const navigate = useNavigate();

    return (
        <div className='position-relative w-100 h-100'>
            <div className='bg-red-head bg-image' style={{top: "0"}}></div>
            <div className='container-90'>
                <div className='container-90 text-light'>
                    <Row className='my-3 my-sm-5'>
                        <h2 className='fs-max wadik my-3'>Артур Буздов</h2>
                        <p className='rockstar fs-regular my-3'>
                            Специалист в области общей и специальной физической подготовки, гимнастики, растяжки и IQ подготовки, координации движений, развитии мозговой деятельности профессиональных бойцов ММА, и спортсменов игровых видов спорта
                        </p>
                        <p className='rockstar fs-regular'>
                            Автор методики Art_Structura – искусство структурирования движений по назначению.
                        </p>
                    </Row>
                    <div className='position-relative'>
                        <img src={resume} className="w-100"/>
                        <button 
                            onClick={() => navigate("/about-us")}
                            className='fs-btn btn-main text-primary zindex-offcanvas start-50 translate-middle rounded-pill'>
                            Читать Резюме
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume