import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';


const HeaderWhite = () => {
    return (
        <Navbar expand="lg" bg="white" className={`shadow`}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link ><img src="./assets/images/header/ion_bed_black.svg" /> Find Stays</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='p-0'><img src="./assets/images/header/blacklogo.svg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-end ">
                    <Nav>
                        <Nav.Link >Login</Nav.Link>
                        <Nav.Link className='p-0 ps-2'>
                        <button className='btn-sign-black'>Sign up</button> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default HeaderWhite;
