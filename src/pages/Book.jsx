import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';


const Book = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [stand, setStand] = useState('');
  const {currentUser} =useContext(AuthContext);
  const [selectedStand, setSelectedStand] = useState('');
  const handleSeatSelection = (seatNumber) => {
    const index = selectedSeats.indexOf(seatNumber);

    if (index === -1) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      const updatedSeats = [...selectedSeats];
      updatedSeats.splice(index, 1);
      setSelectedSeats(updatedSeats);
    }
  };

    const [event ,setevent] = useState(JSON.parse(localStorage.getItem("event")) || null );
    // console.log(event.id)


    const handleSubmit = async () => {
      // Generate a random bookid
      const bookid = Math.floor(Math.random() * 1000); // Assuming bookid is a number
      console.log(bookid)
      localStorage.setItem('bookid', bookid);
      // Prepare data for booking
      const data = {
        bookid: bookid,
        stand: selectedStand,
        seats: selectedSeats.join(","),
        eventid: event.id,
        userid:currentUser.id
      };
    
      try {
        console.log(data);
        await axios.post('http://localhost:8080/api/book', data);
        alert('Booking successful');
    
        // Store bookid in localStorage
        } catch (error) {
        console.error('Error booking seats:', error);
        alert('Error booking seats');
      }
    };

  const renderSeats = () => {
    const rows = 3;
    const cols = 10;
    const seats = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const seatNumber = i * cols + j + 1;
        const isSelected = selectedSeats.includes(seatNumber);

        seats.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatSelection(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
      seats.push(<br key={`br-${i}`} />);
    }

    return seats;
  };
  const handleChange = (event) => {
    setSelectedStand(event.target.value);
  };

  return (
    <div className="book">
       <h1>Select the stand</h1>
      <select value={selectedStand} onChange={handleChange}>
        <option value="">Select a stand</option>
        <option value="north">North Stand</option>
        <option value="south">South Stand</option>
        <option value="east">East Stand</option>
        <option value="west">West Stand</option>
      </select>
      {selectedStand && <p>Selected stand: {selectedStand}</p>}
      <div className="seats">{renderSeats()}</div>
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat}>Seat: {selectedStand} - {seat}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link to={"/pay"}>
        <button className="btn" onClick={handleSubmit}>
          proceed
        </button></Link>
      </div>
    </div>
  );
};

export default Book;