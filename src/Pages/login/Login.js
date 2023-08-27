import React from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import Img from "./img/login-img.png";

const Login = () => {
  return (
    <>
      <main>
        <section className="mt-5">
          <Container>
            <Row>
              <Col>
                <img
                  src="./assets/images/footer/Logo.svg"
                  alt=""
                  className="img-fluid"
                />
                <h4 className="mt-4">login</h4>
                <span>Login to access your Golobe account</span>

                <Form>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="w-100" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Form>
                <strong>Don’t have an account? Sign up</strong>
                <Stack direction='horizontal'>
                    <hr className="w-100" />
                    <p className="w-100">Or login with</p>
                    <hr className="w-100" />
                </Stack>
                <Stack direction='horizontal' gap={2}>
                    
                    <Button className="w-100">fb</Button>
                    <Button className="w-100">google</Button>
                    <Button className="w-100">apple</Button>
                </Stack>
              </Col>
              <Col>
                <img src={Img} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Login;
