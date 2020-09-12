var mongoose = require('mongoose');
const { stringify } = require('querystring');

var OrderSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
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
        type: String,
        required: true
    }],
    total: {
        type: Number,
        required: true
    },
    shippingfee: {
        type: Number,
        required: false
    },
    pointsused: {
        type: Number,
        required: false
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
        required: false
    },
    timecompleted: {
        type: Date,
        required: false
    },
    timecancelled: {
        type: Date,
        required: false
    },
    timeconfirmed: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Order', OrderSchema);