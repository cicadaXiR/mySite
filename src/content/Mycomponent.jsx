import React from 'react'
import { Routes, Route } from "react-router-dom"
import Stack from './../content/stack';
import Queue from '../content/Queue';
function Mycomponent() {
    return (
        <div>
            <div>
                <Stack/>
                <Queue/>
            </div>
                <Routes>
                    <Route path="/stack" Component={Stack} />
                    <Route path="/queue" Component={Queue} />
                </Routes>
        </div>
    )
}

export default Mycomponent
