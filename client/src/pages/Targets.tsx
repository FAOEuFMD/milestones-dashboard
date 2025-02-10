import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {RowData} from "../types/interfaces.ts";
import {formatKeyAreaName, countMet, countProgress, countNotStarted} from "./KeyAreasFunctions.ts";
import TargetsCard from "../components/TargetsCard.tsx";
import { API_URL } from "./APIFunctions";
import TargetsTable from "../components/TargetsTable.tsx";

// Type for url params
type TargetsRouteParams = {
  focusObjectiveId: string;
  keyAreaId: string;
}

//dashboard component
const Targets: React.FC = () => {
  
  const [targetsData, setTargetsData] = useState<RowData[]>([]);
  // State for filters
  const [filters, setFilters] = useState<string[]>([]);

  // Get focus objective and key area id from params
  const { focusObjectiveId, keyAreaId } = useParams<TargetsRouteParams>();
  const focusNumberId = Number(focusObjectiveId);
  const keyNumberId = Number(keyAreaId);

  // Get data filtered by focus objective and key area
  const fetchTargetsData = async (focusId: number, keyId: number) => {
    try {
      const response = await axios.get(`${API_URL}/api/targets/focus_objective/${focusId}/key_area/${keyId}`);
      setTargetsData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Call functions on mount
  useEffect(() => {
    fetchTargetsData(focusNumberId, keyNumberId);
  }, []);

  // handle checkbox selections
  const handleFilterCheck = (category: string) => {
    setFilters((prevState) => 
      prevState.includes(category)
        ? prevState.filter((f) => f !== category) // uncheck category if already checked
        : [...prevState, category] // add category if not previously checked
    );
  };

  // apply filters based on checked boxes, else send all the data
  const filteredData = filters.length ? targetsData.filter((target) => filters.includes(target.target_timeframe)) : targetsData;

  const goalLength = ["Short-term goal", "Mid-term goal", "Long-term goal"]

  console.log("Filters:", filters);
  console.log("Targets:", targetsData.map(target => target.target_timeframe));

  return (
    <div>
      {targetsData.length > 0 && (
        <>
          {/* Title and Subtitle */}
          <h1 className="page-heading">{formatKeyAreaName(targetsData[0].key_area_name)[0]} Targets</h1>
          <h2 className="text-center">{formatKeyAreaName(targetsData[0].key_area_name)[1]}</h2>

          <div className="container mx-auto w-full mt-7">
            {/* Overview Cards */}
            <div className="flex flex-wrap justify-center gap-8">
              <TargetsCard label="targets total" color="text-black" value={targetsData.length} />

              <TargetsCard label={countMet(targetsData) === 1 ? "target met" : "targets met"} color="text-darkGreen" value={countMet(targetsData)} />

              <TargetsCard label="in progress" color="text-brightBlue" value={countProgress(targetsData)} />

              <TargetsCard label="not started" color="text-darkRed" value={countNotStarted(targetsData)} />
            </div>
          </div>

          {/* Filters */}
          <div>
            {goalLength.map((goalType) => (
              <label key={goalType}>
                <input
                  type="checkbox" 
                  value={goalType} 
                  checked={filters.includes(goalType)} 
                  onChange={() => handleFilterCheck(goalType)}
                />
                {goalType}
              </label>
            ))}
          </div>

          {/* Table */}
          <div className="container mx-auto w-full mt-9 bg-white shadow-md rounded-md p-4 border border-gray-200">
            <TargetsTable data={filteredData} />
          </div>
        </>
      )}
    </div>
  );  
};

export default Targets;