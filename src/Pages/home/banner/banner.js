import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  const BannerImg = () => {
    return (
      <div className="position-relative">
        <img
          src="./assets/images/homebanner/homebanner.svg"
          className="img-fluid"
          alt=""
        />
        <div className="position-absolute text-center hm-banner-text">
          <h2>Flights</h2>
          <p>
            Search Flights & Places Hire to our most popular <br /> destinations
          </p>
          <button>
            <img src="./assets/images/homebanner/Paper Plane.svg" alt="" /> Show
            Filghts
          </button>
          
        </div>
      </div>
    );
  };

  return (
    <section className="home-banner">
      <Container>
        <Row>
          <Col xs="6">{BannerImg()}</Col>
          <Col xs="6">{BannerImg()}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
