// src/routes/targets.js
const express = require('express');
const { fetchAllTargetData } 
  = require('../services/targetService');
const { filterByFocus, filterByFocusAndKey } = require('../model/TargetData');
const router = express.Router();

// Route for fetching all target data
router.get('/', async (req, res) => {
    try {
        const result = await fetchAllTargetData();
        res.json(result);
    } catch (error) {
        console.error('Error retrieving targets', error);
        res.status(500).json({ message: 'Database query failed' });
    }
});

// TEMP route for fetching data filtered by focus objective
router.get('/focus_objective/:focus_objective_id', async (req, res) => {
    const {focus_objective_id} = req.params;
    try {
        const result = await filterByFocus(focus_objective_id);
        res.json(result);
    } catch (error) {
        console.log("Error fetching by focus objective", error);
        res.status(500).json({ message: 'Database query failed' });
    }
})

// TEMP route for fetching data filtered by focus objective and key area
router.get('/focus_objective/:focus_objective_id/key_area/:key_area_id', async (req, res) => {
    const {focus_objective_id, key_area_id} = req.params;
    try {
        const result = await filterByFocusAndKey(focus_objective_id, key_area_id);
        res.json(result);
    } catch (error) {
        console.log("Error fetching by focus objective", error);
        res.status(500).json({ message: 'Database query failed' });
    };
})

// Health check route
router.get('/health-check', (req, res) => {
    res.send('Server is running!');
});

module.exports = router;