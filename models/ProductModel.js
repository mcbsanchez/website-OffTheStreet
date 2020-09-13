var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    pictures: [{
        type: String,
        required: true
    }],
    postingdate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    variations: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Product', ProductSchema);