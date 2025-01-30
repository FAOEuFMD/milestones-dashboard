import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/EuFMD_2023_white_xl.png";

const Navbar: React.FC = () => {
  return (
    <nav className="nav w-full bg-gradient-to-t from-darkTeal to-darkGreen py-0 h-16 flex items-center">
      <div className="container ml-4 mt-0 mb-0">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="FAO Logo"
              className="max-h-20 max-w-xs h-auto w-auto"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
