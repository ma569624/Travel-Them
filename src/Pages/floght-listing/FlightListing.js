import React from "react";
import Foter from "../../components/footer/foter";
import { Card, Container, Row, Col, Stack } from "react-bootstrap";
import Formtabsdata from "../../components/forum/Formtabsdata";
import search from "./assets/img/Search.svg";
import HeaderWhite from "../../components/header/HeaderWhite";
import { ListGroup, Tab } from "react-bootstrap";
import CardDetials from "../../components/carddetials/CardDetials";
import menu from './assets/img/menu.svg'
import Filters from "../../components/filters/Filters";

const FlightListing = () => {
  return (
    <>
      <HeaderWhite />
      <main>
        <section className="mt-5">
          <Container>
            <Row>
              <Col>
                <Card className="px-4 py-4 border-0 shadow">
                  <Row>
                    <Col>
                      <Formtabsdata show={false} />
                    </Col>
                    <Col xs="1">
                      <button
                        className="w-75 h-100 border-0"
                        style={{
                          backgroundColor: "var(--mint-green, #8DD3BB)",
                          borderRadius: "4px",
                        }}
                      >
                        <img src={search} alt="" />
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="mt-5 fliters">
          <Container>
            <Row>
              <Col xs="4">
                <h4>Filters</h4>
                <Filters />
              </Col>
              
              <Col>
                <Tab.Container
                  id="list-group-tabs-example"
                  defaultActiveKey="#link1"
                >
                  <Row>
                    <Col>
                      <Card className="shadow border-0">
                        <ListGroup horizontal>
                          <ListGroup.Item action href="#link1">
                            <h5>Cheapest</h5>
                            <span>$99.2h 18m</span>
                          </ListGroup.Item>
                          <ListGroup.Item action href="#link2">
                            <h5>Cheapest</h5>
                            <span>$99.2h 18m</span>
                          </ListGroup.Item>
                          <ListGroup.Item action href="#link3">
                            <h5>Cheapest</h5>
                            <span>$99.2h 18m</span>
                          </ListGroup.Item>
                          <ListGroup.Item action href="#link4">
                            <Stack direction="horizontal" gap={2} className="h-100">
                              <img src={menu} alt=""  className="img-fluid" width={25}/>
                              <h5 className="mb-1">Other Sort</h5>
                            </Stack>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                  <Stack
                    direction="horizontal"
                    className="justify-content-between mt-4"
                  >
                    <span>Showing 4 of 257 places</span>
                    <span>Showing 4 of 257 places</span>
                  </Stack>
                  <Row>
                    <Col>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                          <div className="mt-5">
                            <CardDetials
                              imgsrc={
                                "./assets/images/carddetials/emirates.svg"
                              }
                            />
                          </div>
                          <div className="mt-5">
                            <CardDetials
                              imgsrc={
                                "./assets/images/carddetials/emirates.svg"
                              }
                            />
                          </div>
                          <div className="mt-5">
                            <CardDetials
                              imgsrc={
                                "./assets/images/carddetials/emirates.svg"
                              }
                            />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                          Tab pane content 2
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Foter />
    </>
  );
};

export default FlightListing;
