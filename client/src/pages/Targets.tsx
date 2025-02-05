import React from "react";
import { useState, useEffect } from "react";
// import TargetsTable from "../components/TargetsTable";
// import PlotGraph from "../components/PlotGraph";
import { useParams } from "react-router-dom";
import axios from "axios";
import {RowData} from "../types/interfaces.ts"
import {formatKeyAreaName} from "./KeyAreasFunctions.ts"

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
          <h1 className="page-heading">{formatKeyAreaName(targetsData[0].key_area_name)[0]} Targets</h1>
          <h2 className="text-center">{formatKeyAreaName(targetsData[0].key_area_name)[1]}</h2>
        </>
      )}
    </div>
  );  
};

export default Targets;