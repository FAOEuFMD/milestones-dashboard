import React from "react";
import "./Footer.css";
import logo from "./../../assets/image/fao-logo-en.png .svg";
import FAOLogo from "./../../assets/image/Logo_EuFMD.png";
import FundedbyEU from "./../../assets/image/Funded_by_EU_Footer.png";
import SocialIcon from "../social/SocialIcon";

const Footer: React.FC = () => (
  <footer>
    <div className="contact-info">
      <div className="logo-style">
        <div className="flex justify-start">
          <div className="pt-6 pl-5 fao-1-logo">
            <img src={logo} alt="FAO Logo" className="w-full" />
          </div>
          <div className="pt-4 fao-2-logo">
            <img src={FAOLogo} alt="FAO Logo" className="w-full" />
          </div>
        </div>
        <div className="fao-3-logo">
          <img src={FundedbyEU} alt="Funded by EU" className="w-40" />
        </div>
        <SocialIcon />
      </div>
    </div>
  </footer>
);

export default Footer;
