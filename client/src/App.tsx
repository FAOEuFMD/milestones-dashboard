import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Keyarea from "./pages/Keyarea"; // Updated import from Dashboard to Keyarea
import ExpectedResults from "./pages/ExpectedResults";
import PlotGraph from "./components/PlotGraph";
//patch I will navigate to the PlotGraph

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/keyarea" element={<Keyarea />} /> {/* Updated path */}
          <Route
            path="/keyarea/expectedresults"
            element={<ExpectedResults />}
          />
          <Route path="/keyarea/expectedresults/plot" element={<PlotGraph />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
