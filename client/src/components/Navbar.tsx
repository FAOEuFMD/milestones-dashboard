import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarAlt,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
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
              className="h-8"
              onClick={takeToHome}
            />
            <select className="bg-green-700 text-green-200 py-2 px-4 rounded">
              <option>Select Dashboard</option>
              <option>Dashboard 1</option>
              <option>Dashboard 2</option>
            </select>
          </div>
          {/* search bar */}
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full bg-green-700 text-green-200 border border-green-400 focus:outline-none focus:ring focus:border-green-500 placeholder-white"
            />
          </div>
          {/* icons */}
          <div className="flex items-center space-x-4 text-green-200">
            <Link to="/profile" className="hover:text-green-100">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
            <Link to="/calendar" className="hover:text-green-100">
              <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            </Link>
            <Link to="/milestones" className="hover:text-green-100">
              <FontAwesomeIcon icon={faFlag} size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
