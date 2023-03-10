import express from "express";


import * as datesService from "../services/dates.service.js";


const newsRouter = express.Router();


//GET: start and end date for data
export default newsRouter.get("/", async (request, response) => {
    try {
        // Call prisma query
        const dateRange = await datesService.getDates()

        return response.status(200).json(dateRange)
    } catch (error) {
        return response.status(500).json(error.message)
    }
    response.send("using dates router");
});