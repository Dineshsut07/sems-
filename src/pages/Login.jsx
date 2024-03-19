import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [inputs, setInputs] = useState({

    email: '',
    password: '',
    
  });
  const {login} =useContext(AuthContext);
  const [err,setErr] =useState(null);
  const navigate = useNavigate();

  // const {login} = useContext(AuthContext);
  // console.log(currentUser);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs)  
      navigate("/home");
      console.log(res);
    } catch (error) {
      setErr(error.response);
      // console.log(error);
    }
  }; 
  return (
    <div className='auth'>
      <h1>
        Login 
      </h1>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder='Email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='Password'name='password' onChange={handleChange}/>
        <button type='submit'> Login</button>
       {err && <p>This is an error message</p>} 
        <span>Don't you have an account ? <Link to={'/register'} >Register</Link></span>
      </form>
    </div>
  )
}

export default Login