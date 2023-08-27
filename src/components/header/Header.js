import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';


const Header = (props) => {
    return (
        <Navbar expand="lg" className={`z-1 position-absolute top-0 w-100 z-3 {pros}`}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className='text-white'>Home</Nav.Link>
                        <Nav.Link className='text-white'><img src="./assets/images/header/ion_bed.svg" /> Find Stays</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='p-0'><img src="./assets/images/header/Logo.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-end ">
                    <Nav>
                        <Nav.Link className='text-white'>Login</Nav.Link>
                        <Nav.Link className='p-0 ps-2'>
                        <button className='btn-sign'>Sign up</button> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header;
