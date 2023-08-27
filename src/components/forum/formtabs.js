import React, { useState } from "react";
import { Image, Stack } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Formtabsdata from "./Formtabsdata";

const Formtabs = (props) => {
  console.log(props.tabshow.show)
  const [key, setKey] = useState("first");
  console.log(key);
  return (
    <Tab.Container
      id="left-tabs-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Row className="px-3">
        {props.tabshow.show == "home" ? (
          <Nav variant="pills">
            <Stack direction="horizontal" gap={1}>
              <Nav.Link eventKey="first">
                <img src="/assets/images/forum/airplane.svg" alt="" /> Flights
              </Nav.Link>
              <Nav.Link eventKey="second">
                <img src="/assets/images/forum/ion_bed_black.svg" alt="" />{" "}
                Stays
              </Nav.Link>
            </Stack>
          </Nav>
        ) : (
          <h4 className="g-0 m-0">Where are you flying? </h4>
        )}

        <Tab.Content className="g-0 mt-4">
          <Tab.Pane eventKey="first">
            <Formtabsdata />
          </Tab.Pane>
          <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
        </Tab.Content>
      </Row>
    </Tab.Container>
  );
};

export default Formtabs;
