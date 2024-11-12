// src/services/targetService.js
const TargetData = require('../model/TargetData');

// Fetch all target data for focus objective with ID = 1
const fetchAllTargetData = async () => {
    return await TargetData.getAllTargetData();
};

// Fetch target data by key_area_id
const fetchTargetsByKeyArea = async (keyAreaId) => {
    return await TargetData.getTargetsByKeyArea(keyAreaId);
};

// Fetch target data by expected_result
const fetchTargetsByExpectedResult = async (expectedResult) => {
    return await TargetData.getTargetsByExpectedResult(expectedResult);
};

// Fetch target data by both key_area_id and expected_result
const fetchTargetsByKeyAreaAndExpectedResult = async (keyAreaId, expectedResult) => {
    return await TargetData.getTargetsByKeyAreaAndExpectedResult(keyAreaId, expectedResult);
};

module.exports = { fetchAllTargetData, fetchTargetsByKeyArea, fetchTargetsByExpectedResult, fetchTargetsByKeyAreaAndExpectedResult };// src/services/targetService.js