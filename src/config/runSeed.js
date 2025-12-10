import fs from "fs";
import pool from "./db.js";
import dotenv from 'dotenv';


dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development'
});


async function run() {
  try {
    const sql = fs.readFileSync(new URL("./seed.sql", import.meta.url), "utf8");
    await pool.query(sql);
    console.log("Seed executed successfully");
    await pool.end();
  } catch (err) {
    console.error("Error running seed:", err);
    process.exit(1);
  }
}

console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS ? "***" : null,
  name: process.env.DB_NAME,
});


run();
