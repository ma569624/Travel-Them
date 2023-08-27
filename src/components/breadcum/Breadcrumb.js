import React from 'react'
import { Container, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumb = () => {
  return (
    <section className="mt-5">
        <Container>
          <Row>
            <Breadcrumb className="breadcumb">
              <Breadcrumb.Item href="#">Turkey</Breadcrumb.Item>
              <Breadcrumb.Item >
                Istanbul
              </Breadcrumb.Item>
              <Breadcrumb.Item active>CVK Park Bosphorus Hotel Istanbul</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
        </Container>
    </section>
  )
}

export default BreadCrumb