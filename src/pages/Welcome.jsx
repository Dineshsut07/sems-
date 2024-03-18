import React from "react";
import { Link } from "react-router-dom";
// import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <h1>Welcome to our Stadium Seat Booking System</h1>
        <div className="buttons">
          <Link to={"/login"}>  <button className="login">Login</button></Link>
           <Link to={"/register"}><button className="register">Register</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;