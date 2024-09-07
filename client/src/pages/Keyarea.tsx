// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

interface KeyareaProps {
  // Define any props here
}

const Keyarea: React.FC<KeyareaProps> = () => {
  //We need the active area to keep the page working, however we're not using it
  // const [activeArea, setActiveArea] = useState<string | null>(null);

  const navigate = useNavigate();

  // const handleButtonClick = (area: string) => {
  //   setActiveArea(area);
  // };

  const handleButtonClick = () => {
    navigate("/keyarea/expectedresults");
  };

  return (
    <div className="flex flex-wrap">
      {/* Expected Results Button */}
      <div className="w-full md:w-1/3 p-4">
        <Button label="Expected Results" onClick={() => handleButtonClick()} />
        {
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Key area 1 : Risk Monitoring{" "}
            </h2>
            <p className="text-gray-700">
              {" "}
              Ensure risk information are regularly collected, analyzed and
              available for risk managers in Member Nations and other countries
            </p>
          </div>
        }
      </div>

      {/* Indicators Button */}
      <div className="w-full md:w-1/3 p-4">
        <Button label="Indicators" onClick={() => handleButtonClick()} />
        {
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              {" "}
              Key Area 2 : Risk Mitigation
            </h2>
            <p className="text-gray-700">
              Enhance prevention, confidence of freedom, laboratory biosafety to
              increase protection against FAST diseases
            </p>
          </div>
        }
      </div>

      {/* Targets Button */}
      <div className="w-full md:w-1/3 p-4">
        <Button label="Targets" onClick={() => handleButtonClick()} />
        {
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Key Area 3 : Capacity Developement
            </h2>
            <p className="text-gray-700">
              {" "}
              Improve skills for effective and efficient response to FAST
              incursion
            </p>
          </div>
        }
      </div>
    </div>
  );
};

export default Keyarea;
