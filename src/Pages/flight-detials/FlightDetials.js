import React from "react";
import Foter from "../../components/footer/foter";
import HeaderWhite from "../../components/header/HeaderWhite";
import { Col, Container, Row, Stack } from "react-bootstrap";
import BreadCrumb from "../../components/breadcum/Breadcrumb";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import FlightDetialCard from "../../components/flightdetialcard/FlightDetialCard";

const FlightDetials = () => {
  let i = 0;
  let lengthimg = 9;
  return (
    <>
      <HeaderWhite />
      <BreadCrumb />
      <main className="FlightDetials">
      <section className="price-detial">
        <Container>
          <Row className="first">
            <Col>
              <h4>Emirates A380 Airbus</h4>
              <address>
                <img src="./assets/images/flightdetials/Location.svg" alt=""  className="mb-1 me-2"/>
                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
              </address>
              <Stack className="mb-4" direction="horizontal" gap={2}>
                <span>4.2</span>
                <strong>Very Good </strong>
                <small>54 reviews</small>
              </Stack>
            </Col>
            <Col className="text-end">
              <h2>$240</h2>
              <Stack
                className="justify-content-end"
                direction="horizontal"
                gap={2}
              >
                <button className="btn-social">
                  <img src="./assets/images/flightdetials/heart.svg" alt="" />
                </button>
                <button className="btn-social">
                  <img src="./assets/images/flightdetials/share.svg" alt="" />
                </button>
                <button className="bg-success">Book now</button>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src="./assets/images/flightdetials/big-img.svg"
                className="img-fluid"
                alt=""
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h4>Basic Economy Features</h4>
            </Col>
            <Col>
              <Form className="d-flex gap-2 justify-content-end">
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label>Economy</Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label>Economy</Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
                {["checkbox"].map((type) => (
                  <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                      <Form.Check.Input type={type} isValid />
                      <Form.Check.Label>Economy</Form.Check.Label>
                    </Form.Check>
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stack direction="horizontal" gap={4}>
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
                <img src="./assets/images/flightdetials/short-img.svg" className="img-fluid" alt="" />
              </Stack>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
            <Alert variant='info'>
              <h4>Emirates Airlines Policies</h4>
              <Stack direction="horizontal" className="justify-content-between">
                <Stack direction="horizontal" gap={2}>
                  <img src="./assets/images/flightdetials/ion_stopwatch.svg" alt="" />
                  <span>
                  Pre-flight cleaning, installation of cabin HEPA filters.
                  </span>
                </Stack>
                <Stack direction="horizontal" gap={2}>
                  <img src="./assets/images/flightdetials/ion_stopwatch.svg" alt="" />
                  <span>
                  Pre-flight cleaning, installation of cabin HEPA filters.
                  </span>
                </Stack>
              </Stack>
            </Alert>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-4">
        <Container>
          <Row>
            <Col>
              <FlightDetialCard/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5">
        <Container>
          <Row>
            <Col>
              <FlightDetialCard/>
            </Col>
          </Row>
        </Container>
      </section>
      </main>

      <Foter />
    </>
  );
};

export default FlightDetials;
