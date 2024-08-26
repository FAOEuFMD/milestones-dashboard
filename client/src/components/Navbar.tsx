import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/EuFMD_2023_white_xl.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={logo}
                alt="FAO Logo"
                className="max-h-24 max-w-xs h-auto w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
