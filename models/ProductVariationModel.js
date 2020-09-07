var mongoose = require('mongoose');

var ProductVariationSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ProductVariation', ProductVariationSchema);