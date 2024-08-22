import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/EuFMD_2023_white_xl.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={logo}
                alt="FAO Logo"
                className="h-60"
                // these are the setting from the on render logo
                //class="w-16 md:w-28 h-auto my-2 md:my-4"
              />
            </Link>
          </div>
          {/* search bar
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full bg-green-700 text-green-200 border border-green-400 focus:outline-none focus:ring focus:border-green-500 placeholder-white"
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
