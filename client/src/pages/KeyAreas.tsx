// import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import "../App.css";

// Type for url params
type RouteParams = {
  focusObjectiveId: string;
}

const KeyAreas: React.FC = () => {
  // Get focus objective id from the url
  const { focusObjectiveId } = useParams<RouteParams>();
  // Convert to number for use in API request
  const numberId = Number(focusObjectiveId);

  const navigate = useNavigate();

  // Get data filtered by focus objective
  

  const handleButtonClick = () => {
    // deleted the name param because everything was hardcoded we should use Irene's dynamic choosing once the DB data is correct

    //This is the dynamic choosing of the url for the DBq uery
    // navigate(`/keyarea/${name.toLowerCase().replace(/\s+/g, "")}`); => Irene put this in your CV

    navigate("/KeyAreas/Targets");
  };

  return (
    <div>
      <h1 className="page-heading">Key Areas of Risk Monitoring</h1>
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

export default KeyAreas;
