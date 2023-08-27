import React from "react";
import { Card, Col, Container, Image, ListGroup, Row, Stack } from "react-bootstrap";

const Ourservices = () => {
   
  const card = () => {
    return (
      <>
        <Card className="p-2 card-bg">
          <Stack direction="horizontal" gap={3}>
            <Image
              src="./assets/images/ourservice/img-1.svg"
              alt=""
              className="img-fulid w-25"
            />
            <div>
              <h4>Mobile Prepaid</h4>
              <ListGroup horizontal>
                <ListGroup>Flights</ListGroup>
                <ListGroup>Hotels</ListGroup>
                <ListGroup>Resorts</ListGroup>
              </ListGroup>
            </div>
          </Stack>
        </Card>
      </>
    );
  };

  return (
    <section className="services-sec">
      <Container>
      <Row>
        <Col>
          <h3>Our Service</h3>
          <span>
            Search Flights & Places Hire to our most popular destinations
          </span>
        </Col>
        <Col xs="2">
          <button className="btn-see float-end mt-3">See more places</button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
        <Col lg="4" sm='12'>{card()}</Col>
      </Row>
      </Container>
    </section>
  );
};

export default Ourservices;
