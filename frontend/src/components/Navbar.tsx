import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/EuFMD_2023_white_xl.png";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-t from-darkTeal to-darkGreen h-16 flex items-center">
      <div className="ml-4">
          <Link to="/">
            <img
              src={logo}
              alt="FAO Logo"
              className="max-h-28 w-auto"
            />
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
