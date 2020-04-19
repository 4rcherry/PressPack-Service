const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    name: {
        type: String
    },
    category: { // 1, Clothing; 2, Housing; 3, Food; 4, Medical
        type: Number
    },
    size: { // 1, S; 2, M; 3, L; 4, XL
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

module.exports = mongoose.model('Product', Schema);