import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  //navigate to Key area numer
  const takeToKeyarea = () => navigate("/Keyareas");

  //We don't need the links to DummyFocus as we will be only navigating to KeyArea
  // const takeToKeyarea = () => navigate("/dummy-focus");

  return (
    // background gradient
    <div>
      <h1 className="title pt-10">EuFMD Targets Dashboard</h1>
      {/*Setting up the strategy circle spacing within the page*/}
      <div className="relative h-screen mx-auto">
        {/*wrapping the circle in a bracket so it works with svg and centralising it*/}
        <div
          id="svg-setup-piechart"
          className="absolute inset-0 flex items-center justify-center p-10"
        >
          {/*Creating the 3 Key Areas of the circle*/}
          <div className="container relative min-w-[600px] max-w-[600px] h-[600px] rounded-full bg-white overflow-hidden flex items-center justify-center border-2 border-white">
            <div
              id="focusThree"
              className="polypieceInner absolute w-full h-full focus-three hover:bg-teal-800"
              style={{
                clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                transform: "rotate(74deg)",
              }}
              onClick={takeToKeyarea}
            ></div>
            <div
              id="focusTwo"
              className="polypieceInner absolute w-full h-full focus-two hover:bg-teal-800"
              style={{
                clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                transform: "rotate(194deg)",
              }}
              onClick={takeToKeyarea}
            ></div>
            <div
              id="focusOne"
              className="polypieceInner absolute w-full h-full focus-one hover:bg-teal-800"
              style={{
                clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                transform: "rotate(314deg)",
              }}
              onClick={takeToKeyarea}
            ></div>
          </div>
        </div>
      </div>
      {/*SVG set up and text/ line inserts that overlay the circle*/}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none min-w-[650px]s"
        viewBox="0 0 700 700"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="34%"
          y="67%"
          dominant-baseline="middle"
          text-anchor="middle"
          className="text-xl fill-white"
        >
          Key area 1 : Risk Monitoring
        </text>
        <text
          x="67%"
          y="67%"
          dominant-baseline="middle"
          text-anchor="middle"
          className="text-xl fill-white"
        >
          Key Area 2 : Risk Mitigation
        </text>
        <text
          x="50%"
          y="97%"
          dominant-baseline="middle"
          text-anchor="middle"
          className="text-xl fill-white"
        >
          Key Area 3 : Capacity Developement
        </text>
      </svg>
    </div>
  );
};

export default Homepage;
