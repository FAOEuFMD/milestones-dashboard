// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../App.css";

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
    <div>
      {/* Here the title should dsiplay the Ke Area Selected for example Risk Monitoring */}
      <h1 className="title pt-10">Key Areas of Developement</h1>{" "}
      <div className="flex flex-wrap">
        {/* Expected Results Button */}
        <div className="w-full md:w-1/3 p-4">
          <Button
            label="1.1FAST global surveillance sustained and viral intelligence up-scaled"
            onClick={() => handleButtonClick()}
          />
        </div>

        {/* Indicators Button */}
        <div className="w-full md:w-1/3 p-4">
          <Button
            label="1.2 Enabled risk monitoring"
            onClick={() => handleButtonClick()}
          />
        </div>

        {/* Targets Button */}
        <div className="w-full md:w-1/3 p-4">
          <Button
            label="1.1FAST global surveillance sustained and viral intelligence up-scaled"
            onClick={() => handleButtonClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default Keyarea;
