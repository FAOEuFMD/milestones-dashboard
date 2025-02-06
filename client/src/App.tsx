import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import KeyAreas from "./pages/KeyAreas";
import Targets from "./pages/Targets";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-greyGreen bg-opacity-10">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* Display key areas based on chosen focus objective */}
            <Route path="/focus-objective/:focusObjectiveId" element={<KeyAreas />} />
            {/* Display targets based on chosen key area id */}
            <Route path="/focus-objective/:focusObjectiveId/key-area/:keyAreaId" element={<Targets />}/>
            <Route path="*" element={<Page404 />} />
          </Routes>
      </Router>
    </div>
  );
};

export default App;
