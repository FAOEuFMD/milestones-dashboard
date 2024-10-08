import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import FocusObjectives from "./pages/FocusObjectives";
import ExpectedResults from "./pages/ExpectedResults";
import PlotGraph from "./components/PlotGraph";
import { TargetProvider } from "./context/TargetContext"; // Make sure the path is correct
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <TargetProvider> {/* Wrapping the routes with TargetProvider */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/KeyAreas" element={<FocusObjectives />} />
            <Route
              path="/KeyAreas/expectedresults"
              element={<ExpectedResults />}
            />
            <Route path="/plot" element={<PlotGraph />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </TargetProvider>
      </Router>
    </div>
  );
};
export default App;