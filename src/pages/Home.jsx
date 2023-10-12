import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import myImage from "../images/simply-easy-learning.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({setTest}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav mx-5">
            <li className="nav-item">
              <NavLink className="navbar-brand mx-5"  to="/">Home</NavLink>
            </li>
            <li  className="nav-item">
              <NavLink onClick={() => setTest(true)} className="navbar-brand mx-5">DSA</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={() => setTest(false)}  className="navbar-brand mx-5" to="/java">Java</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand mx-5" to="/react">ReactJs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand mx-5" to="/spring">Spring</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="navbar-brand mx-5" to="/algorithms">Algorithm</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <img src={myImage} alt='error'/> */}
    </div>
  )
}

export default Home
