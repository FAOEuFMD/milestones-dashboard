import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import "../App.css";
import axios from "axios";

// Type for url params
type RouteParams = {
  focusObjectiveId: string;
}

// Interface for row data
interface RowData {
  expected_result: string;
  focus_objective_id: number;
  focus_objective_name: string;
  indicator: string;
  key_area_id: number;
  key_area_name: string;
  program_target: number;
  result_to_date: number;
  target_description: string;
  target_id: string;
  target_timeframe: string;
}

const KeyAreas: React.FC = () => {
  // State for title display
  const [title, setTitle] = useState<string>("");

  // State for data filtered by focus objective and grouped by key area


  // Get focus objective id from the url
  const { focusObjectiveId } = useParams<RouteParams>();
  // Convert to number for use in API request
  const numberId = Number(focusObjectiveId);

  const navigate = useNavigate();

  // Call functions on mount
    useEffect(() => {
      keyAreaTitle();
      if (numberId) fetchData(numberId);
  }, [numberId]);

  // Get data filtered by focus objective
  const fetchData = async (id: number) => {
    try {
      const response = await axios.get(`/api/targets/focus_objective/${id}`);

      // Group data by key area so we can map through them. Data will be an array with one object corresponding to each key area id: [ {keyAreaId: id, items: [rows for that key area]}, etc. ]
      
      const groupedByKeyArea = response.data.reduce((acc: {key_area_id: number, items: RowData[]}[], item: RowData) => {
        // Find if there's already an object in the accumulator with this key area id
        const existingGroup = acc.find(group => group.key_area_id === item.key_area_id);

        // If found, push the item into the existing group
        if (existingGroup) {
          existingGroup.items.push(item);
        } else {
          // If not found, make new group and add it to accumulator
          acc.push({key_area_id: item.key_area_id, items: [item]});
        }
        return acc;
        // Initialize accumulator as an empty array
      }, []);

      console.log(groupedByKeyArea);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  // Set shortened title based on focus objective param
  const keyAreaTitle = () => {
    if (numberId === 1) setTitle("Protection of Livestock");
    else if (numberId === 2) setTitle("Respond to Crises");
    else if (numberId === 3) setTitle("Control of Diseases");
    else setTitle("");
  }


  const handleButtonClick = () => {
    // deleted the name param because everything was hardcoded we should use Irene's dynamic choosing once the DB data is correct

    //This is the dynamic choosing of the url for the DBq uery
    // navigate(`/keyarea/${name.toLowerCase().replace(/\s+/g, "")}`); => Irene put this in your CV

    navigate("/KeyAreas/Targets");
  };

  return (
    <div>
      <h1 className="page-heading">{title} Key Areas</h1>
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
