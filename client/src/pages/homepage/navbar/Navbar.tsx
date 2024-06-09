import React from "react";
import "./Navbar.css";

const Header: React.FC = () => (
  <nav
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundImage:
        "radial-gradient(circle at center, rgba(129, 199, 132, 0.8) 0%, rgba(56, 142, 60, 0.8) 100%)",
    }}
    className="header"
  >
    <div className="h-text tracking-wide text-stone-200">
      <div>EuFMD Strategy 2023-2027</div>
      <span>Move FAST</span>
    </div>
  </nav>
);

export default Header;
