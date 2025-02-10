import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {RowData} from "../types/interfaces.ts";
import {formatKeyAreaName, countMet, countProgress, countNotStarted, calculateStatus} from "./KeyAreasFunctions.ts";
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
  // State for timeframe filters
  const [filters, setFilters] = useState<string[]>([]);
  const [statusFilters, setStatusFilters] = useState<string[]>([]);

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

  // handle checkbox selections for timeframe
  const handleFilterCheck = (category: string) => {
    setFilters((prevState) => 
      prevState.includes(category)
        ? prevState.filter((f) => f !== category) // uncheck category if already checked
        : [...prevState, category] // add category if not previously checked
    );
  };

  // handle checkbox selections for status filtering
  const handleStatusFilterCheck = (status: string) => {
    setStatusFilters((prevState) =>
      prevState.includes(status) ? prevState.filter((f) => f !== status) : [...prevState, status]
    );
  };

  // apply filters based on checked boxes, else send all the data
  const filteredData = filters.length || statusFilters.length 
    ? targetsData.filter((target) => {
      const status = calculateStatus(target.result_to_date, target.program_target);
      const matchesGoalLength = filters.length ? filters.includes(target.target_timeframe) : true;
      const matchesStatus = statusFilters.length ? statusFilters.includes(status) : true;
      return matchesGoalLength && matchesStatus;
    })
    : targetsData;

  // Create filter categories for goal length
  const goalLength = ["Short-term goal", "Mid-term goal", "Long-term goal"];
  const goalStatus = ["Met", "In progress", "Not started"];

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

          <div className="mt-9 grid grid-cols-[1fr_5fr] gap-4">
            {/* Filters */}
            <div className="mx-auto w-full bg-white shadow-md rounded-md px-7 py-5 border border-gray-200">
              <h2 className="font-bold text-2xl text-darkTeal px-3">Filters</h2>

              {/* Status Filter */}
              <div>
                  <h3 className="p-3 text-left text-lg font-bold">Status</h3>
                  <div className="flex flex-col gap-2 px-3 mb-4">
                    {goalStatus.map((status) => (
                      <label key={status} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={status}
                          checked={statusFilters.includes(status)}
                          onChange={() => handleStatusFilterCheck(status)}
                          className="w-4 h-4 accent-greyGreen"
                        />
                        {status}
                      </label>
                    ))}
                  </div>
                </div>

              <div>
                <h3 className="p-3 text-left text-lg font-bold">Goal Length</h3>
                {/* Stack checkboxes with space */}
                <div className="flex flex-col gap-2 px-3">
                  {goalLength.map((goalType) => (
                    <label key={goalType} className="flex items-center gap-2">
                      <input
                        type="checkbox" 
                        value={goalType} 
                        checked={filters.includes(goalType)} 
                        onChange={() => handleFilterCheck(goalType)} 
                        className="w-4 h-4 accent-greyGreen"
                      />
                      {goalType}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mx-auto w-full bg-white shadow-md rounded-md pl-7 pr-10 pt-5 pb-10 border border-gray-200">
              <h2 className="font-bold text-2xl text-darkTeal px-3">Targets</h2>
              <TargetsTable data={filteredData} />
            </div>
          </div>
        </>
      )}
    </div>
  );  
};

export default Targets;