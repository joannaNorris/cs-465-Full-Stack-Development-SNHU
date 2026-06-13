const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.tripsList);

//GET route for tripsFindByCode
router.get('/trips/:code', tripsController.tripsFindByCode);

module.exports = router;