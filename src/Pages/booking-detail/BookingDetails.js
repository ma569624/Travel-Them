import React from 'react'
import Foter from '../../components/footer/foter'
import BreadCrumb from "../../components/breadcum/Breadcrumb";
import HeaderWhite from "../../components/header/HeaderWhite";
import { Col, Container, Row } from 'react-bootstrap';
import FlightDetialCard from '../../components/flightdetialcard/FlightDetialCard';
import BookingDetials from '../../components/bookingdetials/BookingDetials';
import PayType from '../../components/paytype/PayType';
import Book from '../../components/book/Book';
import BookModal from '../../components/bookmodal/BookModal';

const BookingDetails = () => {
  return (
    <>
        <HeaderWhite />
        <BreadCrumb />
        
        <section>
            <Container>
                <Row>
                    <Col xs='8'>
                        <FlightDetialCard />
                        <PayType mt={'mt-5'}/>
                        <Book mt={'mt-5'}/>
                    </Col>
                    <Col xs='4'>
                        <BookingDetials />
                    </Col>
                </Row>
            </Container>
            <BookModal />
        </section>
        <Foter/>
    </>
  )
}

export default BookingDetails