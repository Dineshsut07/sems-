import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../img/author-02.png';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
        <div className="navbar">
          <div className="container">
            <div className="logo">
              <h2>Stadium Spotlight</h2>
            </div>
            <div className="links">
              <ul>
                <li>
                   <Link to={"/home"} ><button>Home</button></Link>
                   <Link to={"/contact"} ><button>Contact us</button></Link>
                   <Link to={"/about"} ><button>About us</button></Link>
                   <Link to={"/history"} ><button>History</button></Link>
                 
                </li>
              </ul>
              <span className='write'>
                <Link className='link' to="/logout">Logout</Link>
              </span>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
