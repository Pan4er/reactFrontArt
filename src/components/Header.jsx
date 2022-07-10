import * as React from "react";
import { Navbar, Nav} from 'react-bootstrap'
import "../style/custom.scss";
import { NavLink} from "react-router-dom";

const Header = () => {
  return (
    <Navbar 
        collapseOnSelect 
        expand="lg" 
        bg="transparent" 
        variant="dark"
        className='d-flex'>
        {/* <div className='bg-red-head bg-image'></div> */}
        <div className='d-block d-lg-flex justify-content-between container-90'>
            <div className='d-flex justify-content-between w-100'>
                <Navbar.Brand href="/" className='inter'>ART STRUCTURA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end w-100'>
                <Nav className='rockstar-semibold'>
                    <Nav.Link>
                        <NavLink to="/blog/videos" className={(navData) => (navData.isActive ? "text-light border-bottom border-light border-2 text-decoration-none" : "text-decoration-none text-light border-0")}>
                            Блог
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/about-us" className={(navData) => (navData.isActive ? "text-light border-bottom border-light border-2 text-decoration-none" : "text-decoration-none text-light border-0")}>О методике</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="/contacts" className={(navData) => (navData.isActive ? "text-light border-bottom border-light border-2 text-decoration-none" : "text-decoration-none text-light border-0")}>Контакты</NavLink>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
  )
}

export default Header