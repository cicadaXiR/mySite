import React, { useState} from "react";
import '../css/home.css';
import Stack from './../content/stack';
import Queue from '../content/Queue';
import Tree from './../content/tree';
import Graph from './../content/graph';

function DSA() {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (window.location.pathname) {
            case "/stack":
                return <Stack />;
            case "/queue":
                return <Queue />;
            case "/tree":
                return <Tree />;
            case "/graph":
                return <Graph />;
            default:
                return null;
        }
    };
    React.useEffect(() => {
        setActiveComponent(renderComponent());
    }, []);
    return (
        <>
            <div class='dsa'>
                <a href="/stack">DSA - Stack</a>
                <a href='/queue'>DSA - Queue</a>
                <a href="/tree">DSA - Tree</a>
                <a href="/graph">DSA - Graph</a>
            </div>
            <div class="main">
                {activeComponent}
            </div >
        </>
    )
}

export default DSA
