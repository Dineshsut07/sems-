import { createContext, useEffect, useState } from "react";

import axios from "axios";
// import { logout } from '../../../backend/controllers/auth';

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) =>{
const [currentUser ,setCurrentUser] = useState(JSON.parse(localStorage.getItem("users")) || null );
      const login = async(inputs) =>{
        const res = await axios.post("http://localhost:8080/api/auth/login", inputs );
        setCurrentUser(res.data);
      }
      const logout = async(inputs) =>{
        const res = await axios.post("http://localhost:8080/api/auth/logout");
        setCurrentUser(null);
      };
      useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(currentUser));
      },[currentUser]);

      return <AuthContext.Provider value={{currentUser, login,logout}}> {children}</AuthContext.Provider>


      }
