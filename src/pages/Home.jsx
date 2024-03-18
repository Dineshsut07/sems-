import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import moment from "moment";
const Home = () => {
 
  const {currentUser} =useContext(AuthContext);
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    try {
      const fetchdata =async() =>{
        // console.log(currentUser.id);
          const res= await axios.get("http://localhost:8080/api/events");
          // console.log(res.data);
          setEvents(res.data);

      }
     fetchdata();
    } catch (error) {
      
    }
  },[])
  return (
    <div className='home'>
      <div className="posts">
        {events.map((event) =>(
          <div className="post" key={event.id}>
           <div className="img">
            <img src="./img/th.jpg" alt="edf" />
           </div>
           <div className="content">
            <Link className="link" to={`/event/${event.id}`} >
              <h1>{event.title}</h1>
               <p> {moment(event.date).format('dddd, MMMM Do YYYY, h:mm:ss a')}</p>
            </Link>
            {/* <p>{event.desc}</p> */}
            <Link className="link" to={`/event/${event.id}`} >

               <button>Read more</button>
            </Link>
           
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home