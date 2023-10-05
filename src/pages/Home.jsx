import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav mx-5">
            <li className="nav-item">
              <Link className="navbar-brand mx-5"  to="/">Home</Link>
            </li>
            <li  className="nav-item">
              <Link className="navbar-brand mx-5" to="/dsa">DSA</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand mx-5" to="/java">Java</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand mx-5" to="/react">ReactJs</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand mx-5" to="/spring">Spring</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand mx-5" to="/algorithms">Algorithm</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Home
