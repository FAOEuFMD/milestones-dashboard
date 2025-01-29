import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import InfoButton from "../components/InfoButton";
import infoData from "../infoData";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  
  // Navigate to Key area number
  const takeToKeyarea = () => navigate("/Keyareas");

  return (
    <div>
      <h1 className="page-heading">EuFMD Milestones</h1>
      <div className="relative h-screen mx-auto">
        {/* Circle setup for focus areas */}
        <div className="absolute inset-0 flex items-center justify-center p-10">
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
        {/* SVG set up and text/line inserts that overlay the circle */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 700 700"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="30%"
            y="38%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-3xl fill-white"
          >
            Protection of Livestock
          </text>
          <text
            x="70%"
            y="38%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-3xl fill-white"
          >
            Respond to Crises
          </text>
          <text
            x="50%"
            y="73%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-3xl fill-white"
          >
            Control of Diseases
          </text>
        </svg>
        {/* Static InfoButtons below each corresponding text */}
          <div className="absolute top-[40%] left-[40%]">
            {/* Need to have optional string to send to infoText because of infoData.ts type, but should not affect display */}
            <InfoButton infoText={infoData[0].focus_objective_name_1 ?? "No information available"} />
          </div>
          <div className="absolute top-[40%] left-[60%]">
            <InfoButton infoText={infoData[1].focus_objective_name_2 ?? "No information available"} />
          </div>
          <div className="absolute top-[75%] left-[50%]">
            <InfoButton infoText={infoData[2].focus_objective_name_3 ?? "No information available"} />
          </div>
        </div>
      </div>
  );
};

export default Homepage;