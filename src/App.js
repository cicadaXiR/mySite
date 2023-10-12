import { BrowserRouter, Routes, Route } from "react-router-dom"
import Java from "./pages/Java";
import Reactjs from "./pages/Reactjs";
import Spring from "./pages/Spring";
import Algorithms from "./pages/Algorithms";
import { useState } from "react";
import Navigation from "./pages/Navigation";
import myImage from "../src/images/simply-easy-learning.png";
import DSAContent from "./pages/DSAContent";
import SideNavBar from "./pages/SideNavBar";
import Home from "./pages/Home";

function App() {
  const [test, setTest] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Home setTest={setTest} />
        { test ? <SideNavBar /> : ''}
        <Routes>
          <Route path="/" element={<><img src={myImage} alt='error' /></>} />
          <Route path="/stack" element={<DSAContent />} />
          <Route path="/queue" element={<DSAContent />} />
          <Route path="/tree" element={<DSAContent />} />
          <Route path="/graph" element={<DSAContent />} />
          <Route path="/java" element={<Java />} />
          <Route path="/react" element={<Reactjs />} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/algorithms" element={<Algorithms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
