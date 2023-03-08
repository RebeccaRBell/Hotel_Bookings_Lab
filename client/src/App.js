import React, { useState, useEffect } from "react";
import Home from "./containers/Home";
import AddBooking from "./containers/AddBooking";
import Contact from "./containers/Contact";
import ViewBookings from "./containers/ViewBookings";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { getBookings } from "./BookingService";

const App = () => {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    })
  }, [])

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-booking" element={<AddBooking  addBooking={addBooking}/>} />
        <Route path="/view-bookings" element={<ViewBookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
