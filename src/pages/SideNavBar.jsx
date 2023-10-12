import React, { useState } from "react";
import '../css/home.css';
import Stack from '../content/stack';
import Queue from '../content/Queue';
import Tree from '../content/tree';
import Graph from '../content/graph';
import { Link, NavLink } from "react-router-dom";

function SideNavBar() {
    return (
        <div className='dsa'>
            <Link to="/stack">DSA - Stack</Link>
            <Link to='/queue'>DSA - Queue</Link>
            <Link to="/tree">DSA - Tree</Link>
            <Link to="/graph">DSA - Graph</Link>
        </div>
    )
}

export default SideNavBar
