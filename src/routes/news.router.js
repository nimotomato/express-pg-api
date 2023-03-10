import express from "express";


import * as newsService from "../services/news.service.js";


const newsRouter = express.Router();


//GET: Label and region for selected dates, specified via query string. 
export default newsRouter.get("/", async (request, response) => {
    try {
        // Take the query params and use in prisma query.
        const startDate = (request.query).startDate;
        const endDate = (request.query).endDate;
        console.log(startDate, endDate)
        console.log(request.query)

        // Call prisma query
        const news = await newsService.getSentiments(startDate, endDate)


        return response.status(200).json(news)
    } catch (error) {


        return response.status(500).json(error.message)
    }
});