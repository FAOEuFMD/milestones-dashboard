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

  const handleButtonClick = () => {
    // deleted the name param because everything was hardcoded we should use Irene's dynamic choosing once the DB data is correct

    //This is the dynamic choosing of the url for the DBq uery
    // navigate(`/keyarea/${name.toLowerCase().replace(/\s+/g, "")}`); => Irene put this in your CV

    navigate("/Keyareas/expectedresults");
  };

  return (
    <div>
      <h1 className="title pt-10">Key Areas of Risk Monitoring</h1>
      <div className="flex flex-wrap">
        {/* Expected Results Button */}
        <div className="w-full md:w-1/3 p-4">
          <Button
            name="RISK MONITORING"
            label="Ensure risk information are regularly collected, analyzed and available for risk managers in Member Nations and other countries"
            onClick={() => handleButtonClick()}
          />
        </div>

        {/* Indicators Button */}
        <div className="w-full md:w-1/3 p-4">
          <Button
            name="RISK MITIGATION"
            label="Enhance prevention, confidence of freedom, laboratory biosafety to increase protection against FAST diseases"
            onClick={() => handleButtonClick()}
          />
        </div>

        {/* Targets Button */}
        <div className="w-full md:w-1/3 p-4">
          <Button
            name="CAPACITY DEVELOPMENT"
            label="Improve skills for effective and efficient response to FAST incursion"
            onClick={() => handleButtonClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default Keyarea;
