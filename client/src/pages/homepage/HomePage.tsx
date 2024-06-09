import React from "react";
import Header from "./navbar/Navbar";
import StrategyCircle from "./strategycircle/StrategyCircle";
import Footer from "../footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <StrategyCircle />
      <Footer />
    </div>
  );
};

export default HomePage;
