import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import * as d3 from "d3";
import {RowData, GroupedKeyArea} from "../types/interfaces.ts"
import {formatKeyAreaName} from "./KeyAreasFunctions.ts"

// Type for url params
type RouteParams = {
  focusObjectiveId: string;
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
      if (numberId) keyAreaTitle(numberId);
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

  const takeToTargets = (focusId: number, keyId: number) => navigate(`/focus-objective/${focusId}/key-area/${keyId}`);

  // Set shortened title based on focus objective param
  const keyAreaTitle = (numberId: number) => {
    if (numberId === 1) setTitle("Protection of Livestock");
    else if (numberId === 2) setTitle("Respond to Crises");
    else if (numberId === 3) setTitle("Control of Diseases");
    else setTitle("");
  };

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

                <div className='h-24 mb-4'>
                  {/* Key Area Name */}
                  <h2 className="font-bold text-lg">{formatKeyAreaName(keyAreaGroup.items[0].key_area_name)[0]}</h2>
                  <h3 className="text-sm">{formatKeyAreaName(keyAreaGroup.items[0].key_area_name)[1]}</h3>
                </div>

                <p>Some text underneath for reference</p>

              </div>
            ))}
          </div>
        </div> 
      )}
    </div>
  );
};

export default KeyAreas;
