const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const referralRoutes = require("./routes/referralRoute")
const app = express()
const connection = require("./connection")
const userRoutes = require("./routes/userRoutes")
app.use(express.json())
app.use(cors())
app.use("/user", userRoutes)
app.use("/referrals", referralRoutes)


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
    }
})



module.exports = app