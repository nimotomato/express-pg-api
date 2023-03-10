import express from "express";
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

app.listen(port, () => console.log(`app listening on ${port}`));


