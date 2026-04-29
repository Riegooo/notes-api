import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    password: String(process.env.DB_PASSWORD),
    
})