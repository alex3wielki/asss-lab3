const mongoose = require('mongoose');

const makeSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: 'Name is required'
    },
    'country': {
        type: String,
        required: 'Country is required'
    },
    'yearFounded': {
        type: Number,
        required: 'Year Founded is Required'
    }
});

module.exports = mongoose.model('Make', makeSchema);