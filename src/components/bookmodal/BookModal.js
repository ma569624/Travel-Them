import React from "react";
import { useState } from "react";
import { Row, Col, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BookModal = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bookmodal">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modal.Title>Add a new Card</Modal.Title>
          <form action="">
            <Row>
              <Col xs="12">
                <div className="input-box">
                  <label htmlFor="">Card Number</label>
                  <input type="text" placeholder="4321 4321 4321 4321" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <div className="input-box">
                  <label htmlFor="">Exp. Date</label>
                  <input type="text" placeholder="02/27" />
                </div>
              </Col>
              <Col xs="6">
                <div className="input-box">
                  <label htmlFor="">CVC</label>
                  <input type="text" placeholder="123" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="input-box">
                  <label htmlFor="">Name on Card</label>
                  <input type="text" placeholder="John Doe" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <div className="input-box">
                  <label htmlFor="">Country or Region</label>
                  <input type="text" placeholder="United States" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Stack direction="horizontal" gap={2} className="tickmark">
                  <input type="checkbox" />
                  <small>
                    Securely save my information for 1-click checkout
                  </small>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  className="w-100 add-cart"
                  onClick={handleClose}
                >
                  Save Changes
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>
                  By confirming your subscription, you allow The Outdoor Inn
                  Crowd Limited to charge your card for this payment and future
                  payments in accordance with their terms. You can always cancel
                  your subscription.
                </span>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookModal;
