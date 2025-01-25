const mongoose = require("mongoose")
require("dotenv").config()


const connection = mongoose.connect(process.env.mangoDB_url)

module.exports = connection
