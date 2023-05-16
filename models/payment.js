const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    trainnumber: {
        type: Number,
        required: true
    },
    station : {
        type: String,
        required: false 
    },
    foodtime: {
        type: String,
        required: true,
        enum: ['breakfast', 'lunch', 'dinner']
    },
    compartment: {
        type: String,
        required: true,
    },
    deliverytype: {
        type: String,
        required: true,
        enum: ['normal', 'speed']
    }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
