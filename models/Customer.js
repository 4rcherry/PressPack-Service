const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    name: {
        type: String
    },
    category: { // 1, Clothing; 2, Housing; 3, Food; 4, Medical
        type: Number
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

module.exports = mongoose.model('Customer', Schema);