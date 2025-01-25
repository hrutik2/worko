const mongoose = require("mongoose")

const referralSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['New', 'Evaluated', 'Hired', 'Rejected'],
        default: 'New'
    }
})

const Referral = mongoose.model("Referral", referralSchema)

module.exports = { Referral }
