// src/services/targetService.js
const TargetData = require('../../model/TargetData');

// Fetch all target data for focus objective with ID = 1
const fetchAllTargetData = async () => {
    return await TargetData.getAllTargetData();
};

module.exports = { fetchAllTargetData };// src/services/targetService.js