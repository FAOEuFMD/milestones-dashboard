import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import PlotGraph from "../components/PlotGraph";

interface DashboardProps {
  // Define any props here
}

//dashboard component
const ExpectedResults: React.FC<DashboardProps> = () => {
  // const [activeArea, setActiveArea] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/plot");
  };
  return (
    <div className="flex flex-wrap">
      {/* activities */}
      <div className="w-full md:w-1/3 p-4">
        <Button
          label="FAST global surveillance sustained and viral intelligence up-scaled "
          onClick={() => handleButtonClick()}
        />
      </div>

      <div className="w-full md:w-1/3 p-4">
        <Button
          label="1.2.Enabled risk monitoring "
          onClick={() => handleButtonClick()}
        />
      </div>

      <div className="w-full md:w-1/3 p-4">
        {" "}
        <Button
          label="1.3.Enhanced FAST early warning "
          onClick={() => handleButtonClick()}
        />{" "}
      </div>
    </div>
  );
};

export default ExpectedResults;
