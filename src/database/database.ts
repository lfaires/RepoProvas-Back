import pg, { Pool } from 'pg';

const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
} 

const connection = new Pool(dbConfig);

export default connection;
