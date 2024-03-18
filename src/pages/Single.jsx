import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Menu from "../components/Menu";
import axios from "axios";
const Single = () => {
  const [event,setEvent]= useState({});
  const location = useLocation();
  const eventid = location.pathname.split('/')[2]; 

  useEffect(()=>{
    try {
      const fetchdata =async()=>{
      const res= await axios.get(`http://localhost:8080/api/events/${eventid}`);
     

      setEvent(res.data[0]);
      console.log(res.data[0]);
      // console.log(event[0].title)
       // console.log(eventid);
       console.log(event.starttime);
      }
      fetchdata();
    } catch (error) {
      console.log(error)
    }
  },[]); 
   useEffect(()=>{
        localStorage.setItem("event", JSON.stringify(event));
      },[event]);
  return (
    <div className="single">
     <div className="container">
       <h1 >{event.title}</h1>
         <p> Description : {event.desc}</p>
         <h5>Start Time : {event.starttime}</h5>
         <h5>end  Time : {event.endtime}</h5>
       <h2>{event.date}</h2>
     <Link to={"/book"}>    <button>BOOK </button> </Link>
     </div>
     {/* <Menu/> */}
    </div>
  );
};

export default Single;
