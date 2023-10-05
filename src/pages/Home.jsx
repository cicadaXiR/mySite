import React from 'react'
import '../css/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dsa">DSA</Link></li>
        <li><Link to="/java">Java</Link></li>
        <li><Link to="/react">ReactJs</Link></li>
        <li><Link to="/spring">Spring</Link></li>
        <li><Link to="/algorithms">Algorithm</Link></li>
        <li style={{float:"right"}}><a class="active" href="#about">About</a></li>
      </ul>
    </div>
  )
}

export default Home
