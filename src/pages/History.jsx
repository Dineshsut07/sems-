import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const History = () => {
    const {currentUser} =useContext(AuthContext);
    const [data ,setData] =useState([]);
    useEffect(() =>{
        try {
             const fetchdata = async () => {
                const result = await  axios.get(`http://localhost:8080/api/book/history/${currentUser.id}`);
                setData(result.data);
                console.log(result.data)
             }
             fetchdata();
        } catch (error) {
            
        }
    },[])
  return (
    <div className='history'>
        <div className="container">
         {data.map((e)=>(
              
              <li key={e.id}>
                <h1>Title: {e.title}</h1>
                <h1> Seats  :{e.seatno}</h1>
                <h1>Date :  {e.date}</h1>
              </li>
         ))}
        </div>

    
    </div>
  )
}

export default History