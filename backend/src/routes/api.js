const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// GET /api - API status and info
router.get('/', apiController.getApiStatus);

// GET /api/endpoints - List all available endpoints
router.get('/endpoints', apiController.getApiEndpoints);

module.exports = router;