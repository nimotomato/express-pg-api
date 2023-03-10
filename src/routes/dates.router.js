const express = require('express');


const getDates = require("../services/dates.service.js");


const newsRouter = express.Router();


//GET: start and end date for data
newsRouter.get("/", async (request, response) => {
    try {
        // Call prisma query
        const dateRange = await getDates()

        return response.status(200).json(dateRange)
    } catch (error) {
        return response.status(500).json(error.message)
    }
});


module.exports = newsRouter;