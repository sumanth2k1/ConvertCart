import pool from '../config/db.js';


export const Restaurant = {
    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM restaurants WHERE id = ?', [id]);
        return rows[0];
    }
};


export default Restaurant;