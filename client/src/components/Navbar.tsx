import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/EuFMD_2023_white_xl.png";

const Navbar: React.FC = () => {
  return (
    <nav className="nav w-full bg-[#018877]">
      <div className="container mx-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="FAO Logo"
              className="max-h-24 max-w-xs h-auto w-auto"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
