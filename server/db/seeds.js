use hotelBookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Scarlett Johansson",
    email: "scarlettjohansson@gmail.com",
    date: "2023-10-01",
    checkedIn: true
  },
  {    
    name: "Lindsey Lohan",
    email: "lindseylohan@gmail.com",
    date: "2023-12-01",
    checkedIn: true
  },
  {    
    name: "Barack Obama",
    email: "barackobama@gmail.com",
    date: "2023-11-01",
    checkedIn: true
  }
]);

