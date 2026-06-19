const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

//define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

//GET route for tripsFindByCode
router
    .route('/trips/:code')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;