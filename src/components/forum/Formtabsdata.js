import React, { useEffect } from "react";
import { Row, Col, Stack, NavLink } from "react-bootstrap";
import { useState } from "react";
import flight from "./Paper Plane form.svg";
import add from "./add-outline.svg";
import { DatePicker } from "react-dater";

import "react-dater/dist/index.css";

const data = [
  { id: 0, label: "Istanbul, TR (AHL)" },
  { id: 1, label: "Delhi" },
];
const data2 = [
  { id: 0, label: "Kolkata" },
  { id: 1, label: "Paris, FR (CDG)" },
];
const data3 = [
  { id: 0, label: "Return" },
  { id: 1, label: "No Return" },
];
const data4 = [
  { id: 0, label: "1 Passenger, Economy" },
  { id: 1, label: "3 Passenger, Economy" },
];

const Formtabsdata = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [items, setItem] = useState(data);
  const [items2, setItem2] = useState(data2);
  const [items3, setItem3] = useState(data3);
  const [items4, setItem4] = useState(data4);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [selectedItem4, setSelectedItem4] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);
  const toggleDropdown2 = () => setOpen2(!isOpen2);
  const toggleDropdown3 = () => setOpen3(!isOpen3);
  const toggleDropdown4 = () => setOpen4(!isOpen4);

  const handleItemClick = (id) => {
    setSelectedItem(id);
    setOpen(!isOpen);
  };
  const handleItemClick2 = (id) => {
    setSelectedItem2(id);
    setOpen2(!isOpen2);
  };
  const handleItemClick3 = (id) => {
    setSelectedItem3(id);
    setOpen3(!isOpen3);
  };const handleItemClick4 = (id) => {
    setSelectedItem4(id);
    setOpen4(!isOpen4);
  };

  const statepicker = (toggle, handleItem, open, selectitem, labelvalue, dataval) => {
    return (
      <>
        <Col className="position-relative">
          <label className="bg-white ms-2 position-absolute px-2 top-0 z-1" style={{transform: "translateY(-52%)"}}>{labelvalue}</label>
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggle}>
              {selectitem
                ? dataval.find((val) => val.id == selectitem).label
                : "Select your destination"}
              <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${open && "open"}`}>
              {dataval.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={(e) => handleItem(e.target.id)}
                  key={item.id}
                  id={item.id}
                >
                  <span
                    className={`dropdown-item-dot ${
                      item.id === selectitem && "selected"
                    }`}
                  >
                    {" "}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </>
    );
  };

  return (
    <form>
      <Row>
        <Col xs="5">
          <Stack direction="horizontal" gap={4} className="position-relative">
            {statepicker(toggleDropdown, handleItemClick, isOpen, selectedItem,["From"],data)}
            <img
              src="./assets/images/forum/trailing-icon.svg"
              alt=""
              className="position-absolute z-1"
              style={{ left: "45%" }}
            />
            {statepicker(
              toggleDropdown2,
              handleItemClick2,
              isOpen2,
              selectedItem2,
              ["To"],
              data2
            )}
          </Stack>
        </Col>
          {statepicker(
            toggleDropdown3,
            handleItemClick3,
            isOpen3,
            selectedItem3,
            ["Trip"],
            data3,
          )}
        
        
        {statepicker(
            toggleDropdown2,
            handleItemClick2,
            isOpen2,
            selectedItem2,
            ["Depart- Return"],
            data3,
          )}

          {statepicker(
            toggleDropdown4,
            handleItemClick4,
            isOpen4,
            selectedItem4,
            ["Passenger - Class"],
            data4
          )}
        

      </Row>
      {
        props.show == false ? <></> : <Row className="mt-4">
        <Col xs="4" className="ms-auto">
          <Stack direction="horizontal" className="justify-content-end" gap={3}>
            <div className="d-flex gap-1">
              <img src={add} alt="" />
              <NavLink>Add Promo Code</NavLink>
            </div>
            <button>
              <img src={flight} alt="" /> Show Filghts
            </button>
          </Stack>
        </Col>
      </Row>
      }
    </form>
  );
};

export default Formtabsdata;
