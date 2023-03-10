import express from "express";
import serverless from 'serverless-http'
import cors from 'cors';


const app = express();
const port = 3030;


import datesRouter from './routes/dates.router.js';
import newsRouter from './routes/news.router.js';


app.use(cors());
app.use(express.json());


app.get("/", (request, response) => {
    response.send("You have arrived.");
});

app.use("/api/dates", datesRouter);
app.use("/api/news", newsRouter);


const lambda = serverless(app)

export async function handler(event, context) {
  return lambda(event, context)
}