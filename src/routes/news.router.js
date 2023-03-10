const express = require('express');


const newsService = require("../services/news.service.js");


const newsRouter = express.Router();


//GET: Label and region for selected dates, specified via query string. 
newsRouter.get("/", async (request, response) => {
    try {
        // Take the query params and use in prisma query.
        const startDate = request.query?.startDate;
        const endDate = request.query?.endDate;

        if (!startDate || !endDate) {
            return response.status(400).json({ error: 'startDate and endDate are required' });
        }

        // Call prisma query
        const news = await newsService(startDate, endDate)


        return response.status(200).json(news)
    } catch (error) {


        return response.status(500).json(error.message)
    }
});

module.exports = newsRouter;