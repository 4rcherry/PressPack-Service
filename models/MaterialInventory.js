const mongoose  = require('mongoose');
const Schema    = mongoose.Schema({
    material_id: {
      type: Object
    },
    location: {
        type: Object
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

module.exports = mongoose.model('MaterialInventory', Schema);