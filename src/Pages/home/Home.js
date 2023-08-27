import React from "react";
import Header from "../../components/header/Header";
import imge from "./bg.png";
import { Col, Container, Row } from "react-bootstrap";

import Form from "../../components/forum/form";
import Ourservices from "../../components/services/Ourservices";
import Banner from "./banner/banner";
import Review from "../../components/review/review";
import Foter from "../../components/footer/foter";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="position-relative p-0 w-auto m-3">
            <Header />
            <div className="overlay"></div>
            <img src={imge} className="img-fluid  top-0" alt="" />
            <div className="banner-text">
              <h1>Helping Others</h1>
              <h2>Live & Travel</h2>
              <h3>Special offers to suit your plan</h3>
            </div>
          </Col>
        </Row>

        <Container className="mt-2">
          <Row>
            <Col>
              <Form show={"home"} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Ourservices />
      <Banner />
      <Review />
      <Foter />
    </>
  );
};

export default Home;
