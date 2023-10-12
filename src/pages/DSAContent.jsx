import React, { useEffect, useState } from "react";
import '../css/home.css';
import Stack from './../content/stack';
import Queue from '../content/Queue';
import Tree from './../content/tree';
import Graph from './../content/graph';

function DSAContent() {
    const [activeComponent, setActiveComponent] = useState(null);
    console.log('logged');
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
    useEffect(() => {
        setActiveComponent(renderComponent());
    }, [window.location.pathname]);
    return (
        <>
            <div className="main">
                {activeComponent}
            </div >
        </>
    )
}

export default DSAContent
