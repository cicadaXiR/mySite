import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import DSA from "./pages/DSA";
import Java from "./pages/Java";
import Reactjs from "./pages/Reactjs";
import Spring from "./pages/Spring";
import Algorithms from "./pages/Algorithms";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/java" element={<Java />} />
          <Route path="/react" element={<Reactjs />} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/algorithms" element={<Algorithms />} />
        </Routes>
        <div>
            <DSA/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
