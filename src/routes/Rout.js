import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/home/Home';
import FlightFlow from '../Pages/flight-flow/FlightFlow';
import FlightListing from '../Pages/floght-listing/FlightListing';
import FlightDetials from '../Pages/flight-detials/FlightDetials';
import BookingDetails from '../Pages/booking-detail/BookingDetails';
import ConformBooking from '../Pages/conformbooking/ConformBooking';
import AccountFlow from '../Pages/accountflow/AccountFlow';
import Login from '../Pages/login/Login';
import SignIn from '../Pages/signup/SignIn';

const Rout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flight' element={<FlightFlow />} />
          <Route path='/flight-listing' element={<FlightListing />} />
          <Route path='/flight-detials' element={<FlightDetials />} />
          <Route path='/booking-detial' element={<BookingDetails />} />
          <Route path='/conform-booking' element={<ConformBooking />} />
          <Route path='/account-flow' element={<AccountFlow />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignIn />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rout