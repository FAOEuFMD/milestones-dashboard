// src/models/TargetData.js
const db = require("../model/helper");

// Core reusable query (without specific filters)
const baseQuery = 
`SELECT
  focus_objectives.id AS focus_objective_id,
  focus_objectives.name AS focus_objective_name,
  key_areas.id AS key_area_id,
  key_areas.name AS key_area_name,
  targets.target_id,
  targets.indicator,
  targets.target_description,
  targets.result_to_date,
  targets.program_target,
  targets.expected_result
  FROM focus_objectives
  JOIN key_areas ON focus_objectives.id = key_areas.focus_objectives_id
  JOIN targets ON key_areas.id = targets.key_area_id
`;


// Function to get all target data (no filters)
const getAllTargetData = async () => {
    const {rows} = await db.query(baseQuery);
    return rows;
};

// Function to get target data filtered by key_area_id
const getTargetsByKeyArea = async (keyAreaId) => {
    const query = baseQuery + " WHERE key_areas.id = ?";
    const {rows} = await db.query(query, [keyAreaId]);
    return rows;
};

// Function to get target data filtered by expected_result
const getTargetsByExpectedResult = async (expectedResult) => {
    const query = baseQuery + " WHERE targets.expected_result LIKE ?";
    const {rows} = await db.query(query, [expectedResult]);
    return rows;
};

// Function to get target data filtered by key_area_id and expected_result
const getTargetsByKeyAreaAndExpectedResult = async (keyAreaId, expectedResult) => {
    const query = baseQuery + " WHERE key_areas.id = ? AND targets.expected_result LIKE ?";
    const {rows} = await db.query(query, [keyAreaId, expectedResult]);
    return rows;
};

module.exports = { getAllTargetData, getTargetsByKeyArea, getTargetsByExpectedResult, getTargetsByKeyAreaAndExpectedResult };