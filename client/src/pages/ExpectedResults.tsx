import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
// import PlotGraph from "../components/PlotGraph";
// import PlotGraph from "../components/PlotGraph";

interface ExpectedResults {
  // Define any props here
}

//dashboard component
const ExpectedResults: React.FC<ExpectedResults> = () => {
  // const [activeArea, setActiveArea] = useState<string | null>(null);
  const [buttonLabel, setButtonLabel] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = (label?: string) => {
    if (label) {
      setButtonLabel(label);
      console.log("Button label clicked:", label);
    }
    navigate("/keyarea/expectedresults/plot");
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
      {/* activities */}
      <div className="w-full md:w-1/3 p-4">
        <Button
          label="FAST global surveillance sustained and viral intelligence up-scaled "
          onClick={handleButtonClick}
        />
      </div>

      <div className="w-full md:w-1/3 p-4">
        <Button
          label="1.2.Enabled risk monitoring "
          onClick={handleButtonClick}
        />
      </div>

      <div className="w-full md:w-1/3 p-4">
        {" "}
        <Button
          label="1.3.Enhanced FAST early warning "
          onClick={handleButtonClick}
        />{" "}
      </div>
      {/* <div className="w-full md:w-1/3 p-4">
        <PlotGraph />
      </div> */}
    </div>
  );
};

export default ExpectedResults;
