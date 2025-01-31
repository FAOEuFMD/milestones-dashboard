import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import KeyAreas from "./pages/KeyAreas"; // Updated import from Dashboard to Keyarea
import Targets from "./pages/Targets";
import PlotGraph from "./components/PlotGraph";
//patch I will navigate to the PlotGraph

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-greyGreen bg-opacity-10">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/KeyAreas" element={<KeyAreas />} />
          <Route path="/KeyAreas/Targets" element={<Targets />}/>
          <Route path="/plot" element={<PlotGraph />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
