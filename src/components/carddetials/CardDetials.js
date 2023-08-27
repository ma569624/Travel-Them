import React from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

const CardDetials = (props) => {
  console.log(props.imgsrc)
  return (
    <>
      <Card className="CardDetial shadow">
        <Container fluid>
          <Row>
            <Col xs="3">
              <img src={props.imgsrc} alt="" className="img-fluid"/>
            </Col>
            <Col>
              <Stack direction="horizontal" className="justify-content-between rate">
                <div>
                  <Stack direction="horizontal" gap={2}>
                    <span className=" px-2 py-1 rate-review">4.2</span>
                    <h6 className="m-0"><strong>Very Good</strong> 54 reviews</h6>
                  </Stack>
                </div>
                <div>
                  <span className="prc-txt">starting from</span>
                  <h3>$104</h3>
                </div>
              </Stack>
              <Row>
                <Col>
                  <Stack
                    className="align-items-baseline time"
                    direction="horizontal"
                    gap={4}
                  >
                    <Stack
                      className="align-items-start"
                      direction="horizontal"
                      gap={2}
                    >
                      <input type="checkbox" className="p-2" />
                      <div>
                        <h6 className="m-0"> 12:00 pm - 01:28 pm </h6>
                        <p>Emirates</p>
                      </div>
                    </Stack>

                    <h6 className="m-0">non stop</h6>

                    <div>
                      <h6 className="m-0">2h 28m</h6>
                      <p>EWR-BNA</p>
                    </div>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack
                    className="align-items-baseline time"
                    direction="horizontal"
                    gap={4}
                  >
                    <Stack
                      className="align-items-start"
                      direction="horizontal"
                      gap={2}
                    >
                      <input type="checkbox" className="p-2" />
                      <div>
                        <h6 className="m-0"> 12:00 pm - 01:28 pm </h6>
                        <p>Emirates</p>
                      </div>
                    </Stack>

                    <h6 className="m-0">non stop</h6>

                    <div>
                      <h6 className="m-0">2h 28m</h6>
                      <p>EWR-BNA</p>
                    </div>
                  </Stack>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Stack className="g-0" direction="horizontal" gap={3}>
                    <button className="p-2 px-3 heart bg-white">
                      <img src="/assets/images/carddetials/heart.svg" alt="" />
                    </button>
                    <button className="w-100 p-2 border-0 view">View Deals</button>
                  </Stack>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default CardDetials;
