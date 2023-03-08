import React from "react";

const ViewBookings = ({ bookings }) => {
  const allBookings = bookings.map((booking, index) => {
    console.log(booking);
    return (
      <li key={index}>
        {booking.name} {booking.email} {booking.date} Checked in:cd
        {booking.checkedIn}
      </li>
    );
  });
  return <ul>{allBookings}</ul>;
};

export default ViewBookings;
