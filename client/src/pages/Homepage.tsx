import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const takeToFocus = () => navigate("/focus");
  const takeToDummy = () => navigate("/dummy-focus");

  return (
    // background gradient
    <div className="relative w-650 h-650 bg-gradient-to-br from-green-500 to-teal-700">
      {/*Setting up the strategy circle spacing within the page*/}
      <div className="relative h-screen mx-auto">
        {/*wrapping the circle in a bracket so it works with svg and centralising it*/}
        <div
          id="svg-setup-piechart"
          className="absolute inset-0 flex items-center justify-center p-20"
        >
          {/*sizing of outer circle*/}
          <div
            id="focus-pie-chart"
            className="container relative min-w-[650px] max-w-[650px] h-[650px] rounded-full bg-green-500/50 flex overflow-hidden items-center justify-center border-2 border-white"
          >
            {/*creating the outer sections of the strategy circle */}
            <div
              id="focusTwoI"
              className="polypieceOuter absolute w-full h-full bg-green-500 hover:bg-lime-400"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 240%)",
                transform: "rotate(148deg)",
              }}
              onClick={takeToDummy}
            ></div>
            <div
              id="focusTwoII"
              className="polypieceOuter absolute w-full h-full bg-green-500 hover:bg-lime-300"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 240%)",
                transform: "rotate(208deg)",
              }}
              onClick={takeToDummy}
            ></div>
            <div
              id="focusOneI"
              className="polypieceOuter absolute w-full h-full bg-teal-500 hover:bg-lime-400"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 240%)",
                transform: "rotate(269deg)",
              }}
              onClick={takeToDummy}
            ></div>
            <div
              id="focusOneII"
              className="polypieceOuter absolute w-full h-full bg-teal-500 hover:bg-lime-300"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 240%)",
                transform: "rotate(330deg)",
              }}
              onClick={takeToDummy}
            ></div>
            <div
              id="focusThreeIII"
              className="polypieceOuter absolute w-full h-full bg-cyan-500 hover:bg-lime-400"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 180% 240%)",
                transform: "rotate(30deg)",
              }}
              onClick={takeToDummy}
            ></div>
            <div
              id="focusThreeII"
              className="polypieceOuter absolute w-full h-full bg-cyan-500 hover:bg-lime-300"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 190% 240%)",
                transform: "rotate(67deg)",
              }}
              onClick={takeToDummy}
            ></div>

            <div
              id="focusThreeI"
              className="polypieceOuter absolute w-full h-full bg-cyan-500 hover:bg-lime-200"
              style={{
                clipPath: "polygon(50% 50%, 100% 50%, 285% 240%)",
                transform: "rotate(110deg)",
              }}
              onClick={takeToDummy}
            ></div>
            {/*Creating smaller circle with three focus sections*/}
            <div className="container relative w-[250px] h-[250px] rounded-full bg-green-500 flex overflow-hidden items-center justify-center border-2 border-white">
              <div
                id="focusThree"
                className="polypieceInner absolute w-full h-full bg-cyan-600 hover:bg-lime-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 0, 100% 240%)",
                  transform: "rotate(74deg)",
                }}
                onClick={takeToFocus}
              ></div>
              <div
                id="focusTwo"
                className="polypieceInner absolute w-full h-full bg-green-600 hover:bg-lime-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 0, 100% 240%)",
                  transform: "rotate(194deg)",
                }}
                onClick={takeToFocus}
              ></div>
              <div
                id="focusOne"
                className="polypieceInner absolute w-full h-full bg-teal-600 hover:bg-lime-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 0, 100% 240%)",
                  transform: "rotate(314deg)",
                }}
                onClick={takeToFocus}
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
            x="42%"
            y="47%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-xl fill-white"
          >
            Focus One
          </text>
          <text
            x="58%"
            y="47%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-xl fill-white"
          >
            Focus Two
          </text>
          <text
            x="50%"
            y="59%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-xl fill-white"
          >
            Focus Three
          </text>

          <text
            x="35%"
            y="27%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            Risk Monitoring
          </text>
          <text
            x="20%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            Risk Mitigation
          </text>
          <text
            x="67%"
            y="27%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            Capacity Development
          </text>
          <text
            x="80%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            Tools and Resources
          </text>
          <text
            x="75%"
            y="73%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            Vaccine Security
          </text>
          <text
            x="51%"
            y="80%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            Global FMD control
          </text>
          <text
            x="27%"
            y="76%"
            dominant-baseline="middle"
            text-anchor="middle"
            className="text-l fill-white"
          >
            FAST Control Risk Area
          </text>

          <line
            x1="49%"
            y1="4%"
            x2="50%"
            y2="50%"
            stroke="white"
            strokeWidth="2"
          />

          <line
            x1="7%"
            y1="27%"
            x2="35%"
            y2="42%"
            stroke="white"
            strokeWidth="2"
          />

          <line
            x1="9%"
            y1="75%"
            x2="50%"
            y2="50%"
            stroke="white"
            strokeWidth="2"
          />

          <line
            x1="34%"
            y1="93%"
            x2="44%"
            y2="66%"
            stroke="white"
            strokeWidth="2"
          />

          <line
            x1="68%"
            y1="93%"
            x2="57%"
            y2="66%"
            stroke="white"
            strokeWidth="2"
          />

          <line
            x1="90%"
            y1="73%"
            x2="50%"
            y2="50%"
            stroke="white"
            strokeWidth="2"
          />

          <line
            x1="90%"
            y1="27%"
            x2="65%"
            y2="41.5%"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Homepage;
