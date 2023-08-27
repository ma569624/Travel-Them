import React from "react";
import { Card, Stack } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const FlightDetialCard = () => {
  return (
    <Card className="FlightDetialCard">
      <Stack direction="horizontal" className="justify-content-between">
        <h6 className="mb-0">Return Wed, Dec 8</h6>
        <span>2h 28m</span>
      </Stack>
      <Stack direction="horizontal" className="justify-content-between mt-4">
        <Card className="py-2 px-3">
          <Stack direction="horizontal" gap={3}>
            <img
              src="assets/images/carddetials/emirates.svg"
              alt=""
              className="img-fluid"
              style={{ width: "55px" }}
            />
            <div>
              <h5 className="mb-0">Emirates</h5>
              <small>Airbus A320</small>
            </div>
          </Stack>
        </Card>

        <ListGroup horizontal  className="feature">
            <ListGroup.Item> <img src="assets/images/others/airplane-li.svg" className="img-fluid" alt="" /> </ListGroup.Item>
            <ListGroup.Item> <img src="assets/images/others/ic_round-airline-seat-recline-normal.svg" className="img-fluid" alt="" /> </ListGroup.Item>
            <ListGroup.Item> <img src="assets/images/others/ion_fast-food.svg" className="img-fluid" alt="" /> </ListGroup.Item>
            <ListGroup.Item> <img src="assets/images/others/ion_stopwatch.svg" className="img-fluid" alt="" /> </ListGroup.Item>
            <ListGroup.Item> <img src="assets/images/others/Wifi.svg" className="img-fluid" alt="" /> </ListGroup.Item>
        </ListGroup>
      </Stack>
      <Stack direction="horizontal" gap={5} className="justify-content-center mt-4">
       <Stack direction="horizontal" gap={3}>
        <strong>12:00 pm</strong>
        <small>Newark(EWR)</small>
       </Stack>
        <Stack direction="horizontal" gap={3}>
          <img src="assets/images/others/line.svg" alt="" className="img-fluid" />
          <img src="assets/images/others/airplane.svg" alt="" className="img-fluid btm-air"/>
          <img src="assets/images/others/line.svg" alt="" className="img-fluid" />
        </Stack >
        <Stack direction="horizontal" gap={3}>
        <strong>12:00 pm</strong>
        <small>Newark(EWR)</small>
        </Stack>
      </Stack>
    </Card>
  );
};

export default FlightDetialCard;
