const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for clubs
const clubSchema = new Schema({
    _id: {
        type: Number,
    },
    name: {
        type: String,
    },
    country: {
        type: String,
    },
    eliminated: {
        type: Boolean,
    },
})

const Club = mongoose.model('club', clubSchema);

module.exports = Club