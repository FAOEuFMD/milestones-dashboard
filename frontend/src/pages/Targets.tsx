import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {RowData} from "../types/interfaces.ts";
import {formatKeyAreaName, countMet, countProgress, countNotStarted, calculateStatus} from "./KeyAreasFunctions.ts";
import TargetsCard from "../components/TargetsCard.tsx";
import { API_URL } from "./APIFunctions";
import TargetsTable from "../components/TargetsTable.tsx";
import Filters from "../components/Filters.tsx";

// Type for url params
type TargetsRouteParams = {
  focusObjectiveId: string;
  keyAreaId: string;
}

//dashboard component
const Targets: React.FC = () => {
  
  const [targetsData, setTargetsData] = useState<RowData[]>([]);
  // State for priority and status filters
  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [priorityFilters, setPriorityFilters] = useState<string[]>([]);

  // Get focus objective and key area id from params
  const { focusObjectiveId, keyAreaId } = useParams<TargetsRouteParams>();
  const focusNumberId = Number(focusObjectiveId);
  const keyNumberId = Number(keyAreaId);

  // Get data filtered by focus objective and key area
  const fetchTargetsData = async (focusId: number, keyId: number) => {
    try {
      //const response = await axios.get(`${API_URL}/${focusId}/${keyId}`);
      const response = await axios.get(`${API_URL}/focus/${focusId}/key/${keyId}`);
      setTargetsData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Call functions on mount
  useEffect(() => {
    fetchTargetsData(focusNumberId, keyNumberId);
  }, []);

  // Filters can easily be added to if we think of more
  const handleFilterChange = (filterType: "status" | "priority", value: string) => {
    console.log("handleFilterChange called with:");
  console.log("filterType:", filterType);  // Logs 'timeframe' or 'status'
  console.log("value:", value);            // Logs the selected value (goalType or category)
    if (filterType === 'priority') {
      setPriorityFilters((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value) // uncheck category if already checked
        : [...prevState, value] // add category if not previously checked
      );
    } else if (filterType === 'status') {
      setStatusFilters((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value) // uncheck category if already checked
        : [...prevState, value] // add category if not previously checked
      );
    };
  }

  // apply filters based on checked boxes, else send all the data
  const filteredData = statusFilters.length || priorityFilters.length
    ? targetsData.filter((target) => {
      const status = calculateStatus(target.result_to_date, target.program_target);
      const targetPriority = typeof target.priority === 'string' 
        ? target.priority.toLowerCase() === 'yes' ? "Yes" : "No"
        : Boolean(target.priority) ? "Yes" : "No";
      const matchesPriority = priorityFilters.length ? priorityFilters.includes(targetPriority) : true;
      const matchesStatus = statusFilters.length ? statusFilters.includes(status) : true;
      return matchesStatus && matchesPriority;
    })
    : targetsData;

  // Create filter categories
  const goalStatus = ["Met", "In progress", "Not started"];
  const priorityOptions = ["Yes", "No"];

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
                    <Filters
                      categories={goalStatus} 
                      selectedCategories={statusFilters} 
                      filter='status'
                      handleFilterChange={(filter, value) => handleFilterChange(filter, value)}/>
              </div>

              {/* Priority Filter */}
              <div>
                  <h3 className="p-3 text-left text-lg font-bold">Priority</h3>
                    <Filters
                      categories={priorityOptions} 
                      selectedCategories={priorityFilters} 
                      filter='priority'
                      handleFilterChange={(filter, value) => handleFilterChange(filter, value)}/>
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