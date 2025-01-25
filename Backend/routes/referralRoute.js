
const express = require("express");
const { Referral } = require("../model/refferalmodle");
const { authMiddleware } = require("../middlware/auth");

const referralRoutes = express.Router();


referralRoutes.post("/create",authMiddleware, async (req, res) => {
    const { name, email, experience, resume } = req.body;

    if (!name || !email || !experience || !resume) {
        return res.status(400).send({ msg: "All fields are required" });
    }

    try {
        const newReferral = new Referral({ name, email, experience, resume });
        await newReferral.save();
        return res.status(201).send({ msg: "Referral created successfully" });
    } catch (error) {
        console.error("Error creating referral:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
});


referralRoutes.get("/", async (req, res) => {
    try {
        const referrals = await Referral.find();
        return res.status(200).send(referrals);
    } catch (error) {
        console.error("Error fetching referrals:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
});


referralRoutes.patch("/update/:id",authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).send({ msg: "Status is required" });
    }

    try {
        const referral = await Referral.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!referral) {
            return res.status(404).send({ msg: "Referral not found" });
        }

        return res.status(200).send({ msg: "Status updated successfully", referral });
    } catch (error) {
        console.error("Error updating referral:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
});



module.exports = referralRoutes;
