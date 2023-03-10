require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
var cors = require('cors')

const app = express();


const datesRouter = require("./src/routes/dates.router.js");
const newsRouter = require("./src/routes/news.router.js");



app.use(cors());
app.use(express.json());


app.get("/default", (request, response) => {
    response.send("You have arrived.");
});

app.use("/default/api/dates", datesRouter);
app.use("/default/api/news", newsRouter);


module.exports.handler = serverless(app);