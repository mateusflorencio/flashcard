const mongoose = require("mongoose");
require('dotenv').config()

const mongoUrl = process.env.MONGO_URL;

mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl, (err) => {
    err ? console.log('connect') : console.log('connection error');
})