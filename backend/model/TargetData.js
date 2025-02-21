// src/models/TargetData.js
const db = require("../model/helper");

// Core reusable query (without specific filters)
const baseQuery = 
`SELECT
  focus_objectives.id AS focus_objective_id,
  focus_objectives.name AS focus_objective_name,
  key_areas.id AS key_area_id,
  key_areas.name AS key_area_name,
  targets.id,
  targets.indicator,
  targets.target_description,
  targets.result_to_date,
  targets.program_target,
  targets.expected_result,
  targets.target_timeframe
  FROM focus_objectives
  JOIN key_areas ON focus_objectives.id = key_areas.focus_objectives_id
  JOIN targets ON key_areas.id = targets.key_area_id
`;


// Function to get all target data (no filters)
const getAllTargetData = async () => {
    const {rows} = await db.query(baseQuery);
    return rows;
};
 
// TEMP function to get data filtered by focus objective id
const filterByFocus = async (focus_objective_id) => {
    const query = baseQuery + "WHERE focus_objectives.id = ?";
    const {rows} = await db.query(query, [focus_objective_id]);
    return rows;
}

// TEMP function to get data filtered by focus objective id and key area id
const filterByFocusAndKey = async (focus_objective_id, key_area_id) => {
    const query = baseQuery + "WHERE focus_objectives.id = ? AND key_areas.id = ?";
    const {rows} = await db.query(query, [focus_objective_id, key_area_id]);
    return rows;
}

module.exports = { filterByFocusAndKey, filterByFocus, getAllTargetData };