import React, {useState} from 'react';
import { postBooking } from '../BookingService';

const AddBooking = ({addBooking}) => {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  date: ""
});

const onChange = (event) => {
  const newFormData = Object.assign({}, formData);
  newFormData[event.target.name] = event.target.value;
  setFormData(newFormData);
}

const onSubmit = (event) => {
  event.preventDefault();
  postBooking(formData).then((data) => {
    addBooking(data);
  })
  setFormData({
    name: "",
    email: "",
    date: ""
  });
}

  return (
    <form onSubmit={onSubmit} id="bookings-form" >
    <h2>Add a Booking</h2>
    <div className="formWrap">
        <label htmlFor="name">Name:</label>
        <input 
            onChange={onChange} 
            type="text" 
            id="name" 
            name="name"
            value={formData.name} />
    </div>
    <div className="formWrap">
        <label htmlFor="email">Email:</label>
        <input 
            onChange={onChange} 
            type="text" 
            id="email" 
            name="email"
            value={formData.email} />
    </div>
    <div className="formWrap">
        <label htmlFor="date">Date:</label>
        <input 
            onChange={onChange} 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date}/>
    </div>

    <input type="submit" value="Save" id="save"/>
</form>
  )
}

export default AddBooking