import React from "react";
import HeaderWhite from "../../components/header/HeaderWhite";
import Foter from "../../components/footer/foter";
import BgImg from "./img/bgimg.png";
import person from "./img/person-img.png";
import edit from "./img/edit.png";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const AccountFlow = () => {
  return (
    <>
      <HeaderWhite />
      <main className="mt-5 account-flow">
        <section className="profile-sec">
          <Container>
            <Row>
              <Col>
                <img src={BgImg} alt="" className="img-fluid" />
              </Col>
            </Row>
            <Row className="per-detial">
              <Col xs="3" className="mx-auto">
                <div className="person" style={{ width: "fit-content" }}>
                  <img src={person} alt="" className="" />
                  <button>
                    <img src={edit} alt="" />
                  </button>
                </div>
                <h2 className="mb-0">John Doe.</h2>
                <span>john.doe@gmail.com</span>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
                <h3>Account</h3>
                <Card className="mt-4 p-3">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Stack direction='horizontal' className="w-100">
                            <Stack>
                              <small>Name</small>
                              <strong>John Doe</strong>
                            </Stack>

                            <button>Change</button>
                          </Stack>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Stack direction='horizontal' className="w-100">
                            <Stack>
                              <small>Name</small>
                              <strong>John Doe</strong>
                            </Stack>

                            <button>Change</button>
                          </Stack>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Stack direction='horizontal' className="w-100">
                            <Stack>
                              <small>Name</small>
                              <strong>John Doe</strong>
                            </Stack>

                            <button>Change</button>
                          </Stack>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Stack direction='horizontal' className="w-100">
                            <Stack>
                              <small>Name</small>
                              <strong>John Doe</strong>
                            </Stack>

                            <button>Change</button>
                          </Stack>
                        </td>
                      </tr>
                     
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Foter />
    </>
  );
};

export default AccountFlow;
