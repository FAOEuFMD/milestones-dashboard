// Interface for row data
 export interface RowData {
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
export interface GroupedKeyArea {
  key_area_id: number;
  items: RowData[];
}

// 