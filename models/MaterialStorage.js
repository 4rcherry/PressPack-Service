const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    name: {
        type: String
    },
    liquid: {
        type: Number
    },
    mass: {
        type: Number
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('MaterialStorage', Schema);