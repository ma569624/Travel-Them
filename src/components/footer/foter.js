import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import Newsletter from './Newsletter'

const Foter = () => {

    const links = () => {
        return(
            <>
                <h4>About Us</h4>
                    <NavLink>Canada</NavLink>
                    <NavLink>Canada</NavLink>
                    <NavLink>Canada</NavLink>
                    <NavLink>Canada</NavLink>
            </>
        )
    }
  return (
    
    <footer>
        <Newsletter/>
      <Container fluid className='bg-footer'>
        <Container>
            <Row>
                <Col xs='3'>
                    <Row>
                        <Col xs='8'>
                        <Row><img src="./assets/images/footer/Logo.svg" alt="" className='img-fluid'/></Row>
                    <Row className='mt-4'>
                        <Col>
                            <img src="./assets/images/footer/social-icons\fb.svg" alt="" />
                        </Col>
                        <Col>
                            <img src="./assets/images/footer/social-icons\tw.svg" alt="" />
                        </Col>
                        <Col>
                            <img src="./assets/images/footer/social-icons\yt.svg" alt="" />
                        </Col>
                        <Col>
                            <img src="./assets/images/footer/social-icons\inst.svg" alt="" />
                        </Col>
                    </Row>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    {links()}
                </Col>
                <Col>
                    {links()}
                </Col>
                <Col>
                    {links()}
                </Col>
                <Col>
                    {links()}
                </Col>
                <Col>
                    {links()}
                </Col>
            </Row>
        </Container>
      </Container>
    </footer>
  )
}

export default Foter
