import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

// Interface for data grouped by key area id
interface GroupedKeyArea {
  key_area_id: number;
  items: RowData[];
}

const KeyAreas: React.FC = () => {
  // State for title display
  const [title, setTitle] = useState<string>("");

  // State for data filtered by focus objective and grouped by key area
  const [keyAreaData, setKeyAreaData] = useState<GroupedKeyArea[]>([]);

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

      setKeyAreaData(groupedByKeyArea);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  console.log(keyAreaData);

  // Set shortened title based on focus objective param
  const keyAreaTitle = () => {
    if (numberId === 1) setTitle("Protection of Livestock");
    else if (numberId === 2) setTitle("Respond to Crises");
    else if (numberId === 3) setTitle("Control of Diseases");
    else setTitle("");
  };

  // Split Key Area name into two parts based on brackets to format separately
  const formatKeyAreaName = (name: string): [string, string] => {
    // Get indices of brackets
    const openBracket = name.indexOf('[');
    const closeBracket = name.indexOf(']');
    // get part inside brackets and make all uppercase
    const insideBracket = name.slice(openBracket + 1, closeBracket).toUpperCase().trim();
    // get part after brackets
    const outsideBracket = name.slice(closeBracket + 1).trim();
    // return as an array
    return [insideBracket, outsideBracket]
  };

  // Navigate to Targets for selected Key Area
  const takeToTargets = (focusId: number, keyId: number) => navigate(`/focus-objective/${focusId}/key-area/${keyId}`);

  return (
    <div>
      <h1 className="page-heading">{title} Key Areas</h1>

      {keyAreaData.length > 0 && (
        <div className="container mx-auto w-full mt-7">
          <div className="flex flew-wrap justify-center gap-4">

            {/* Map through first array */}
            {keyAreaData.map((keyAreaGroup) => (
              <div key={keyAreaGroup.key_area_id} 
              className="bg-white shadow-md rounded-md p-4 border border-gray-200 w-96 cursor-pointer" 
              onClick={() => takeToTargets(numberId, keyAreaGroup.key_area_id)}>

                {/* Key Area Name */}
                <h2 className="font-bold text-lg">{formatKeyAreaName(keyAreaGroup.items[0].key_area_name)[0]}</h2>
                <h3 className="text-sm">{formatKeyAreaName(keyAreaGroup.items[0].key_area_name)[1]}</h3>

                
              </div>
            ))}
          </div>
        </div> 
      )}
    </div>
  );
};

export default KeyAreas;
