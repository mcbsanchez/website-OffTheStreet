var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    //put variables, i only put samples to be followed
    listingOwner: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        enum: ['clothes', 'food', 'electronics', 'tickets', 
                'furniture', 'beauty', 'books', 'hobbies',
                'sports', 'accessories', 'media', 'music', 'pets'],
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);