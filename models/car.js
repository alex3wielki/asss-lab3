// reference mongoose
const mongoose = require('mongoose');

// create the car schema
const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: 'Make is required'
    },
    model: {
        type: String,
        required: 'Model is required'
    },
    year: {
        type: Number,
        required: 'Year is required'
    },
    colour: {
        type: String
    }
});

// make it public
module.exports = mongoose.model('Car', carSchema);