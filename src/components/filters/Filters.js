import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {InputRange} from "react";
import { useState } from "react";

const Filters = () => {
  const [range, setrange] = useState({
      value: 5,
      value2: 10,
      value3: 10,
      value4: {
        min: 5,
        max: 10,
      },
      value5: {
        min: 3,
        max: 7,
      },
    });

  return (
    <>
      <Accordion
        defaultActiveKey={["0", "1", "2", "3", "4"]}
        className="filters"
        alwaysOpen
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <form className="form">
              {/* <InputRange
                draggableTrack
                maxValue={20}
                minValue={0}
                formatLabel={(value) => `${value} kg`}
                value={range.value5}
                onChange={(value) => setrange({ value5: value })}
                onChangeComplete={(value) => console.log(value)}
              /> */}
            </form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Departure Time</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Rating</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Airlines</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Filters;
