import React from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviewCard = () => {
    return (
      <Card>
        <h4>“A real sense of community, nurtured”</h4>
        <p>
          Really appreciate the help and support from the staff during these
          tough times. Shoutout to Katie for helping me always, even when I was
          out of the country. And always available when needed.
        </p>
        <NavLink className="float-end">View more</NavLink>
        <span className="mb-2">
          <FaStar style={{ color: "yellow" }} />
          <FaStar style={{ color: "yellow" }} />
          <FaStar style={{ color: "yellow" }} />
          <FaStar style={{ color: "yellow" }} />
          <FaStar style={{ color: "yellow" }} />
        </span>
        <h5>Olga</h5>
        <h6>Weave Studios – Kai Tak</h6>
        <span className="g-txt">
          <img
            src="./assets/images/review/flat-color-icons_google.svg"
            alt=""
            className="pe-2"
          />{" "}
          Google
        </span>
        <img
          src="./assets/images/review/review-card-img.svg"
          alt=""
          className="mt-4"
        />
      </Card>
    );
  };
  return (
    <section className="review">
      <Container>
        <Row className="mt-4 review">
          <Col>
            <h3>Reviews</h3>
            <span>What people says about Golobe facilities</span>
          </Col>
          <Col xs="2">
            <button className=" float-end mt-3">See All</button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="4">{reviewCard()}</Col>
          <Col xs="4">{reviewCard()}</Col>
          <Col xs="4">{reviewCard()}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;
