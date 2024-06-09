import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import Focus123Dummy from "./pages/Focus123Dummy";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/focus" element={<Focus123Dummy />} />
      </Routes>
    </div>
  );
};

export default App;
