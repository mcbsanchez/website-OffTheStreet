var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    numitems: {
        type: Number,
        required: true
    },
    products: [{
        type: String
    }],
    modepayment: {
        type: String,
        required: true
    },
    modedelivery: {
        type: String,
        required: true
    },
    address: [{
        type: String
    }],
    total: {
        type: Number,
        required: true
    },
    shippingfee: {
        type: Number,
        required: true
    },
    pointsused: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    timeordered: {
        type: Date,
        required: true
    },
    timecompleted: {
        type: Date,
        required: true
    },
    timecancelled: {
        type: Date,
        required: true
    },
    timeconfirmed: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);