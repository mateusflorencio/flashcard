const mongoose = require("mongoose");
require('dotenv').config()

const mongoUrl = process.env.MONGO_URL;

mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }

})