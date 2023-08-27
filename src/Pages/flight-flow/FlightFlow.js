import React from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import Imgbanner from "./assets/img/banner.svg";
import Form from "../../components/forum/form";
import price1 from "./assets/img/price1.svg";
import Foter from "../../components/footer/foter";
import imgpack from "./assets/img/Rectangle 3.png";
import HeaderWhite from "../../components/header/HeaderWhite";


const FlightFlow = () => {
  const packing = () => {
    return (
      <Card style={{padding: "15px",  background: "var(--mint-green, #8DD3BB)",
      height: "100%",border:'0',}}>
        <article
          style={{
            
            height: "100%",
            position:'relative',
            
          }}
        >
          
            <Stack
              direction="horizontal"
              className="justify-content-between"
              gap={3}
            >
              <h2>Backpacking Sri Lanka</h2>
              <span className="bg-white px-3 py-2 " style={{ borderRadius: "8px" }}>
                <h6 className="text-center">From</h6>
                <h4>$700</h4>
              </span>
            </Stack>
            <p className="mt-3">
              Traveling is a unique experience as it's the best way to unplug
              from the pushes and pulls of daily life. It helps us to forget
              about our problems, frustrations, and fears at home. During our
              journey, we experience life in different ways. We explore new
              places, cultures, cuisines, traditions, and ways of living.
            </p>
            
             <button className="border-0 bg-white w-100 position-absolute bottom-0">
                Book Flight
              </button>
             
        </article>
      </Card>
    );
  };
  const PriceCard = () => {
    return (
      <>
        <Card className="border-0 position-relative">
          <img src={price1} alt="" className="img-fluid" />
          <div className="position-absolute price-sec w-100">
            <Container>
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-center"
              >
                <div>
                  <h4 className="text-white">Melbourne</h4>
                  <p className="text-white">An amazing journey</p>
                </div>
                <h2 className="text-white">$ 700</h2>
              </Stack>
              <button className="w-100 button-book">Book Flight</button>
            </Container>
          </div>
        </Card>
      </>
    );
  };

  return (
    <main className="FlightFlow">
      <HeaderWhite />
      <section>
        <Container fluid className="g-0">
          <Row className="g-0">
          <img src={Imgbanner} alt="" className="img-fluid" />
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col>
          <Form show={"flightSearch"} />
          </Col>
        </Row>
      </Container>
      <section className="map">
        <Container fluid>
          <Container>
            <Row>
              <Col>
                <h3>Let's go places together</h3>
                <p>
                  Discover the latest offers and news and start planning your
                  next trip with us.
                </p>
              </Col>
              <Col xs="2">
                <button className="float-end">See All</button>
              </Col>
            </Row>
          </Container>
          <Row>
            <Card
              style={{
                background: "var(--mint-green, #8DD3BB)",
                height: "400px",
              }}
            ></Card>
          </Row>
        </Container>
      </section>
      <section className="mt-4 price-card-sec">
        <Container>
          <Row>
            <Col>
              <h3>Let's go places together</h3>
              <p>
                Discover the latest offers and news and start planning your next
                trip with us.
              </p>
            </Col>
            <Col xs="2">
              <button className="float-end button-default">See All</button>
            </Col>
          </Row>
          <Row>
            <Col>{PriceCard()}</Col>
            <Col>{PriceCard()}</Col>
            <Col>{PriceCard()}</Col>
            <Col>{PriceCard()}</Col>
          </Row>
        </Container>
      </section>
      <section className="mt-4 detail-sec">
        <Container>
          <Row>
            <Col>
              <h3>Fall into travel</h3>
              <p>
                Going somewhere to celebrate this season? Whether you’re going
                home or somewhere to roam, we’ve got the travel tools to get you
                to your destination.
              </p>
            </Col>
            <Col xs="2">
              <button className="float-end">See All</button>
            </Col>
          </Row>
          <Row className="g-4">
            <Col>{packing()}</Col>
            <Col>
              <Row className="g-3">
                <Col xs="6">
                  <img src={imgpack} alt="" className="img-fluid" />
                </Col>
                <Col xs="6">
                  <img src={imgpack} alt="" className="img-fluid" />
                </Col>
                <Col xs="6">
                  <img src={imgpack} alt="" className="img-fluid" />
                </Col>
                <Col xs="6">
                  <img src={imgpack} alt="" className="img-fluid" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Foter />
    </main>
  );
};

export default FlightFlow;
