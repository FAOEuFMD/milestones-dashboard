import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/faologo.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const takeToHome = () => navigate("/");

  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="FAO Logo"
              className="h-40"
              // these are the setting from the on render logo
              //class="w-16 md:w-28 h-auto my-2 md:my-4"
              onClick={takeToHome}
            />
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
