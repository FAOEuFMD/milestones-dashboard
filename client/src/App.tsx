import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
