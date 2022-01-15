const express = require("express");
const axios = require("axios");

const router = express.Router();
const URL = "https://dekontaminasi.com/api/id/covid19/hospitals";

router.get("/", async (req, res) => {
  try {
    const query = req.query.query;
    const { data } = await axios.get(URL);
    let hospitals = data;
    if (query) {
      hospitals = hospitals.filter((hospital) => {
        const hospitalName = hospital.name.toLowerCase();
        return hospitalName.includes(query.toLowerCase());
      });
    }
    return res.json(hospitals);
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting hospitals.",
    });
  }
});

module.exports = router;
