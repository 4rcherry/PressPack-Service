const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    name: {
        type: String
    },
    sizeS: {
        type: Number
    },
    sizeM: {
        type: Number
    },
    sizeL: {
        type: Number
    },
    sizeXL: {
        type: Number
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('CustomerStorage', Schema);