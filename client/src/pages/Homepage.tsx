import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import InfoButton from "../components/InfoButton";
import Footer from "../components/Footer";
import { useEffect, useState } from 'react';

interface FocusObjective {
  id: number;
  name: string;
}

// interface for mapping through all data in api call
interface RawFocusObjective {
  focus_objective_id: number;
  focus_objective_name: string;
  [key: string]: any // accounts for all additional properties
}

const Homepage: React.FC = () => {
  // State for Focus Objective data
  const [focus, setFocus] = useState<FocusObjective[]>([]);
  const navigate = useNavigate();

  // Call getFocus on mount
  useEffect(() => {
    getFocus();
  }, []);

  // Call API for Focus Objective data
  const getFocus = async () => {
    try {
      const results = await fetch('api/targets', {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });
      const json = await results.json();

      // Extract just name and id
      const extracted: FocusObjective[] = json.map((item: RawFocusObjective) => ({
        id: item.focus_objective_id,
        name: item.focus_objective_name
      }));

      // Remove duplicates by id
      let uniqueFocus: FocusObjective[] = [];
      let seen: number[] = [];

      for (const obj of extracted) {
        // If we haven't seen this id
        if (!seen.includes(obj.id)) {
          // push it to seen
          seen.push(obj.id);
          // add the whole object to uniqueFocus
          uniqueFocus.push(obj);
        }
        // Stop when we hit 3 for performance
        if (uniqueFocus.length === 3) break;
      }

      setFocus(uniqueFocus);
    } catch (error) {
      console.log("Error fetching focus objectives: ", error);
    }
  }

  // Navigate to KeyArea for selected focus objective
  const takeToKeyArea = (id: number) => navigate(`/focus-objective/${id}`);

  return (
    <div>
      <h1 className="page-heading">EuFMD Milestones</h1>
      <div className="relative h-screen mx-auto">
        {/* Circle setup for focus areas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container relative min-w-[600px] max-w-[600px] h-[600px] rounded-full bg-white overflow-hidden flex items-center justify-center border-2 border-white">
            {/* Clickable pieces leading to KeyArea */}
            {focus.length > 0 && (
              <>
                {/* Protection of Livestock */}
                <div
                  className="polypieceInner absolute w-full h-full bg-darkGreen hover:bg-greyGreen"
                  style={{
                    clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                    transform: "rotate(194deg)",
                  }}
                  onClick={() => takeToKeyArea(focus[0].id)}
                ></div>

                {/* Respond to Crises */}
                <div
                  className="polypieceInner absolute w-full h-full bg-lighterTeal hover:bg-greyGreen"
                  style={{
                    clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                    transform: "rotate(314deg)",
                  }}
                  onClick={() => takeToKeyArea(focus[1].id)}
                ></div>

                {/* Control of Diseases */}
                <div
                  className="polypieceInner absolute w-full h-full bg-darkTeal hover:bg-greyGreen"
                  style={{
                    clipPath: "polygon(50.3% 50%, 100% 1%, 100% 240%)",
                    transform: "rotate(74deg)",
                  }}
                  onClick={() => takeToKeyArea(focus[2].id)}
                ></div>
              </>
            )}

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
            className="circle-text"
          >
            Protection of Livestock
          </text>
          <text
            x="70%"
            y="38%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="circle-text"
          >
            Respond to Crises
          </text>
          <text
            x="50%"
            y="73%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="circle-text"
          >
            Control of Diseases
          </text>
        </svg>
        {/* InfoButtons */}
        {focus.length > 0 && (
          <>
            <div className="absolute top-[40%] left-[40%]">
              <InfoButton infoText={focus[0]?.name || ""} />
            </div>
            <div className="absolute top-[40%] left-[60%]">
              <InfoButton infoText={focus[1]?.name || ""} />
            </div>
            <div className="absolute top-[75%] left-[50%]">
              <InfoButton infoText={focus[2]?.name  || ""} />
            </div>
          </>
        )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
  );
};

export default Homepage;