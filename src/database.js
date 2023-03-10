import pg from "pg";
import "dotenv/config.js";

const { Pool } = pg;


const pool = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    ssl: process.env.SSL
});

export default pool;