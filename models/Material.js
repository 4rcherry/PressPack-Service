const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    supplier_id: {
        type: Object
    },
    name: {
        type: String
    },
    unit: { // 1, Liter; 2, Kilogram;
        type: Number
    },
    price: {
        type: Number
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('Material', Schema);