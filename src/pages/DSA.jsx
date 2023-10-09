import '../css/home.css';
import { Link, Routes, Route } from "react-router-dom"
import Stack from './../content/stack';
import Queue from '../content/Queue';

function DSA() {
    return (
        <>
            <div class='dsa'>
                <Link to="/stack">DSA - Stack</Link>
                <Link to="/queue">DSA - Queue</Link>
                <a href="#">DSA - Tree</a>
                <a href="#">DSA - Graph</a>
            </div>
            <div class="main">
            <Routes>
                <Route path="/stack" remder={()=><Stack/>} />
                <Route path="/queue" Component={Queue} />
            </Routes>
        </div >
        </>
    )
}

export default DSA
