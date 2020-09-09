const mongoose = require('mongoose');
const Club = require('./club');
const config = require('../config');

const connectDb = () => mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const models = { Club }

module.exports = { connectDb, models };
