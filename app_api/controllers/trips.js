const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('Trip');

//GET all trips
const tripsList = async (req, res) => {
    try {
        console.log('Fetching all trips');
        const trips = await Trip
        .find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({message: "Trips not found"});
    }

};

//GET trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({'code': req.params.code}); //returns single record
        
        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.status(200).json(trip);

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    } 

};

module.exports = {
    tripsList,
    tripsFindByCode
};