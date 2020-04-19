const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    product_id: {
        type: ObjectId
    },
    location: {
        type: ObjectId
    },
    in: {
        type: Number
    },
    out: {
        type: Number
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('ProductInventory', Schema);