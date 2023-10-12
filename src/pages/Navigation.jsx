import React from "react";
import Home from "./Home";
import SideNavBar from "./SideNavBar";

function Navigation({showNavBar, setShowNavBar}) {
    return (
        <>
            <Home setShowNavBar={setShowNavBar} />
            {/* <div>
                <SideNavBar showNavBar={showNavBar} />
            </div> */}
        </>
    );
};

export default Navigation;