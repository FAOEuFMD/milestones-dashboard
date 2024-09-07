import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";
import TargetsTable from "../components/TargetsTable";
// import PlotGraph from "../components/PlotGraph";

interface ExpectedResults {
  // Define any props here
}

//dashboard component
const ExpectedResults: React.FC<ExpectedResults> = () => {
  const [showTable, setShowTable] = useState(false); // State to control table visibility
  const [name, setName] = useState<string | null>(null); // State to control table visibility
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowTable(true); // Update state to show the TargetsTable component
    setSelectedName(event.target.name);
    // setName(selectedName);
    console.log(typeof selectedName);
  };
  //trying to shwo the component conditionally

  // const [selectedExpectedResult, SetSelectedExpectedResult] = useState<
  //   string | null
  // >(null);

  // const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const selectedLabel = event.currentTarget.getAttribute("label");
  //   SetSelectedExpectedResult(selectedLabel);
  //   console.log(selectedLabel);
  // };

  return (
    <div>
      {/* Here the title should dsiplay Expected Results for Key area name example 
       Expected results for Risk Monitring 
       subtitle text :  Ensure risk information are regularly collected, analyzed and available for risk managers in Member Nations and other countries
         */}
      <h1 className="title pt-10">Expected Results for Risk Monitoring </h1>{" "}
      <h3 className="title pt-10">
        {" "}
        Ensure risk information are regularly collected, analyzed and available
        for risk managers in Member Nations and other countries{" "}
      </h3>{" "}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          {/* This button labels have to be taken from the params to better query de DB */}
          <Button
            label="1.1FAST global surveillance sustained and viral intelligence up-scaled"
            name="1-1"
            onClick={handleButtonClick}
          />
        </div>

        <div className="w-full md:w-1/3 p-4">
          <Button
            label="1.2 Enabled risk monitoring"
            name="1-2"
            onClick={handleButtonClick}
          />
        </div>

        <div className="w-full md:w-1/3 p-4">
          <Button
            label="1.3 Enhanced FAST early warning"
            name="1-3"
            onClick={handleButtonClick}
          />
        </div>

        {showTable && <TargetsTable dbQ={selectedName} />}
      </div>
    </div>
  );
};

export default ExpectedResults;
