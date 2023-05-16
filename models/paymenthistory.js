const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymenthistorySchema = new Schema({

    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    trainnumber: {
        type: Number,
        required: true
    },
    station : {
        type: String,
        default: "NA"
        // required: false 
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
    },
    date : {
        type: Date,
        default: Date.now
    }
});

const Paymenthistory = mongoose.model('Paymenthistory', paymenthistorySchema);
module.exports = Paymenthistory;
