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
        address_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
        }
    }],
    orders: [{
        order_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    }],
    cart: [{
        productOrders_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductOrders'
        }
    }],
    wishlist: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }]
});

module.exports = mongoose.model('User', UserSchema);