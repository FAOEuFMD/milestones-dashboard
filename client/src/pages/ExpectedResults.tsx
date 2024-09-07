import React from "react";
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

  const handleButtonClick = () => {
    setShowTable(true); // Update state to show the TargetsTable component
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
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 p-4">
        <Button
          label="FAST global surveillance sustained and viral intelligence up-scaled"
          onClick={handleButtonClick}
        />
      </div>

      <div className="w-full md:w-1/3 p-4">
        <Button
          label="1.2 Enabled risk monitoring"
          onClick={handleButtonClick}
        />
      </div>

      <div className="w-full md:w-1/3 p-4">
        <Button
          label="1.3 Enhanced FAST early warning"
          onClick={handleButtonClick}
        />
      </div>

      {showTable && <TargetsTable />}
    </div>
  );
};

export default ExpectedResults;
