import React from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
      <Container style={{transform:'translateY(64px)'}}>
        <Row>
          <Col>
            <Card>
              <Row>
                <Col className="my-auto">
                  <h2>Subscribe Newsletter</h2>
                  <h5 className="mt-3">The Travel</h5>
                  <h6 className="mt-3">
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </h6>
                  <Stack className="mt-3" direction="horizontal" gap={3}>
                    <input type="text" placeholder="Your email address"/>
                    <button>
                        Subscribe
                    </button>
                  </Stack>
                </Col>
                <Col>
                    <img src="./assets/images/footer/newslatter.svg" alt=""  className="img-fluid float-end"/>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Newsletter;
