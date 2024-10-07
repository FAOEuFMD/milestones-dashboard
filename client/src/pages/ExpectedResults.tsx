// Here I need to use the context I have set up
// I need to use useTargetContext() to fetch targets, loading and error values 
// when the button is clicked, the handleButtonClick() function needs to update the selectName state with its expected_results

import React, { useState } from "react";
import { useTargetContext } from "../context/TargetContext";
import Button from "../components/Button";
import TargetsTable from "../components/TargetsTable"; // Example of another component that may use targets

const ExpectedResults: React.FC = () => {
  const { targets, loading, error } = useTargetContext(); // Access data from context
  const [selectedName, setSelectedName] = useState<string | null>(null); // State to track button selection

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error state

  // Handle button click event
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setSelectedName(target.name); // Store the selected name from button
  };

  return (
    <div>
      <h1 className="title pt-10">Expected Results for Risk Monitoring</h1>
      <h3 className="title pt-10">
        Ensure risk information is regularly collected, analyzed, and available
      </h3>
      <div className="flex flex-wrap">
        {/* Render buttons dynamically from the targets data */}
        {targets.map((target) => (
          <div key={target.target_id} className="w-full md:w-1/3 p-4">
            <Button
              label={target.target_description}
              name={target.expected_result}
              onClick={handleButtonClick}
            />
          </div>
        ))}
        {/* Optionally render a table or details if a button is selected */}
        {selectedName && <TargetsTable dbQ={selectedName} />}
      </div>
    </div>
  );
};

export default ExpectedResults;
