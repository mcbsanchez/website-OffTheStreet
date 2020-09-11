var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lsatname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: false
    },
    address: [{
        type: String
    }],
    orders: [{
        type: String
    }],
    cart: [{
        type: String
    }],
    wishlist: [{
        type: String
    }]
});

module.exports = mongoose.model('User', UserSchema);