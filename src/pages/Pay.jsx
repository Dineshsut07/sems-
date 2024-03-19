import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function Pay() {  
  const [output, setOutput] = useState({});
  const [event, setEvent] = useState(JSON.parse(localStorage.getItem("event")) || null);
  const [bookid] = useState(JSON.parse(localStorage.getItem("bookid")) || null);
  const { currentuser } = useContext(AuthContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        // console.log(bookid);
        const res = await axios.get(`http://localhost:8080/api/book/mybooking/${bookid}`);
        setOutput(res.data[0]);
        console.log(res.data[0]);
      } catch (error) {
        console.log(error)
      }
    };
    fetchdata();
  }, [bookid,event]);

  // Function to count the number of seats
  const countSeats = () => {
    if (output && output.seatno) {
      return output.seatno.split(',').length;
    }
    return 0; // Return 0 if seatno is not available
  };

  // Function to calculate total amount
  const calculateTotalAmount = () => {
    const seatCount = countSeats();
    return seatCount * 1000;
  };
  return (
    <div className='sevemain'>
      <h2 className='evendes'>Booking id: {bookid}</h2>
      <h2 className='evendes'>Event id: {output.eventid}</h2>
      <h2 className='evendes'>Event desc: {output.desc}</h2>
      <h2 className='evendes'>Event date: {output.date}</h2>
      <h2 className='evendes'>Start time:{output.starttime}</h2>
      <h2 className='evendes'>End time: {output.endtime}</h2>
      <h2 className='evendes'>Total seats: {countSeats()}</h2>
      <h2 className='evendes'>Total amount: {calculateTotalAmount()}</h2> {/* Call calculateTotalAmount function */}
      <h2 className='evendes'>Seat no's: {output.seatno}</h2>
      <h2 className='evendes'>Stand no's: {output.seatstand}</h2>
      <Link to='/Ticket'><button className='btn'>Procced</button></Link>
    </div>
  );
}
export default Pay;
