const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationSchema = new Schema({

    stationname: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    pnr: {
        type: Number,
        required: true
    },
});

const Station = mongoose.model('Station', stationSchema);
module.exports = Station;
