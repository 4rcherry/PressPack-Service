const mongoose  = require('mongoose');
const {ObjectId} = require('mongodb');
const Schema    = mongoose.Schema({
    material_id: {
      type: ObjectId
    },
    storage_id: {
        type: ObjectId
    },
    quantity: {
        type: Number
    },
    in: {
        type: Boolean
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('MaterialInventory', Schema);