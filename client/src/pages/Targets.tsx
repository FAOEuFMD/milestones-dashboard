import React from "react";
import { useState, useEffect } from "react";
// import TargetsTable from "../components/TargetsTable";
// import PlotGraph from "../components/PlotGraph";
import { useParams } from "react-router-dom";
import axios from "axios";
import {RowData} from "../types/interfaces.ts";
import {formatKeyAreaName, countMet, countProgress, countNotStarted} from "./KeyAreasFunctions.ts";
import TargetsCard from "../components/TargetsCard.tsx";

// Type for url params
type TargetsRouteParams = {
  focusObjectiveId: string;
  keyAreaId: string;
}

//dashboard component
const Targets: React.FC = () => {
  
  const [targetsData, setTargetsData] = useState<RowData[]>([]);

  // Get focus objective and key area id from params
  const { focusObjectiveId, keyAreaId } = useParams<TargetsRouteParams>();
  const focusNumberId = Number(focusObjectiveId);
  const keyNumberId = Number(keyAreaId);

  // Get data filtered by focus objective and key area
  const fetchTargetsData = async (focusId: number, keyId: number) => {
    try {
      const response = await axios.get(`/api/targets/focus_objective/${focusId}/key_area/${keyId}`);
      setTargetsData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Call functions on mount
  useEffect(() => {
    fetchTargetsData(focusNumberId, keyNumberId);
  }, []);

  console.log(targetsData);

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
              <TargetsCard label="targets total" color="text-lighterTeal" value={targetsData.length} />

              <TargetsCard label={countMet(targetsData) === 1 ? "target met" : "targets met"} color="text-darkGreen" value={countMet(targetsData)} />

              <TargetsCard label="in progress" color="text-brightBlue" value={countProgress(targetsData)} />

              <TargetsCard label="not started" color="text-darkRed" value={countNotStarted(targetsData)} />
            </div>
          </div>
        </>
      )}
    </div>
  );  
};

export default Targets;