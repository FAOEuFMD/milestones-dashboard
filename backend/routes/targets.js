// src/routes/targets.js
const express = require('express');
const { fetchAllTargetData, fetchTargetsByKeyArea, 
  fetchTargetsByExpectedResult, fetchTargetsByKeyAreaAndExpectedResult } 
  = require('../services/targetService');
const router = express.Router();

// Route for fetching all target data
router.get('/', async (req, res) => {
    try {
        const result = await fetchAllTargetData();
        console.log('Query result:', result);
        res.json(result);
    } catch (error) {
        console.error('Error retrieving targets', error);
        res.status(500).json({ message: 'Database query failed' });
    }
});

// Route for fetching targets by focus_objective_id
router.get('/targets/key_area/:focusObjectiveId', async (req, res) => {
    const { focusObjectiveId } = req.params;
    try {
        const result = await fetchTargetsByKeyArea(focusObjectiveId);
        console.log('Query result:', result);
        res.json(result);
    } catch (error) {
        console.error('Error retrieving targets by focus objective', error);
        res.status(500).json({ message: 'Database query failed' });
    }
});

// Route for fetching targets by expected_result (e.g., '1.1%')
router.get('/targets/expected_result/:expectedResult', async (req, res) => {
    const { expectedResult } = req.params;
    try {
        const result = await fetchTargetsByExpectedResult(`${expectedResult}%`);
        console.log('Query result:', result);
        res.json(result);
    } catch (error) {
        console.error('Error retrieving targets by expected result', error);
        res.status(500).json({ message: 'Database query failed' });
    }
});

// Route for fetching targets by key_area_id and expected_result
router.get('/targets/key_area/:keyAreaId/expected_result/:expectedResult', async (req, res) => {
    const { keyAreaId, expectedResult } = req.params;
    try {
        const result = await fetchTargetsByKeyAreaAndExpectedResult(keyAreaId, `${expectedResult}%`);
        console.log('Query result:', result);
        res.json(result);
    } catch (error) {
        console.error('Error retrieving targets by key area and expected result', error);
        res.status(500).json({ message: 'Database query failed' });
    }
});

// Health check route
router.get('/health-check', (req, res) => {
    res.send('Server is running!');
});

module.exports = router;