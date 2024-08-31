import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Keyarea from "./pages/Keyarea"; // Updated import from Dashboard to Keyarea
import Focus from "./pages/Focus";
import DummyFocus2 from "./pages/Plot";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/keyarea" element={<Keyarea />} /> {/* Updated path */}
          <Route path="/focus" element={<Focus />} />
          <Route path="/dummy-focus" element={<DummyFocus2 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
