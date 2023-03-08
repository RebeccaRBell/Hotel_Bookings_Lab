import React from "react";
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
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-booking" element={<AddBooking />} />
        <Route path="/view-bookings" element={<ViewBookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
