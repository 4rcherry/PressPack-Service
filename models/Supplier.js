const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    name: {
        type: String
    },
    product: {
        type: String
    },
    address: {
        type: String
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('Supplier', Schema);