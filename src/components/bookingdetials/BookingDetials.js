import React from "react";
import { Stack, Card, Row, Table } from "react-bootstrap";
import img from "./assets/Frame 186.png"

const BookingDetials = () => {
  return (
    <>
      <Card className="booking-detials">
        <Stack direction="horizontal" className="top" gap={3}>
          <img src={img} alt="" className="img-fluid" />
          <div className="detial">
            <span>Economy</span>
            <h4>Emirates A380 Airbus</h4>
            <Stack direction="horizontal" gap={2}>
              <div className="review">
                <p className="mb-0">4.2</p>
                
              </div>
                <strong className="mb-0">
                  Very Good <small>54 reviews</small>
                </strong>
            </Stack>
          </div>
        </Stack>
        <div className="tagline">
            <hr />
          <h5>Your booking is protected by golobe</h5>
          <hr />
        </div>
        <div>
          <Table className="table-borderless">
            <thead>
              <tr>
                <th>Price Details</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Base Fare</td>
                <td>$400</td>
              </tr>

              <tr>
                <td>Discount</td>
                <td>$400</td>
              </tr>

              <tr>
                <td>Taxes</td>
                <td>$400</td>
              </tr>

              <tr>
                <td>Service Fee</td>
                <td>$400</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>$400</td>
              </tr> 
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
};

export default BookingDetials;
