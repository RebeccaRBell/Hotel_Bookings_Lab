import React, { useState } from "react";
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

const App = () => {

  const [bookings, setBookings] = useState([])

  const baseURL = 'http://localhost:9000/api/bookings/'

  const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  }

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-booking" element={<AddBooking postBooking={postBooking} addBooking={addBooking}/>} />
        <Route path="/view-bookings" element={<ViewBookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
