import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,   
  maxIdle: 10,           
  idleTimeout: 60000,    
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;