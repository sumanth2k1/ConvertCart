import pool from '../config/db.js';


export const MenuItem = {
    async findMatching(namePattern, minPrice, maxPrice) {
        const like = `%${namePattern}%`;
        const [rows] = await pool.query(
            `SELECT mi.*, r.name as restaurantName, r.city
            FROM menu_items mi
            JOIN restaurants r ON r.id = mi.restaurant_id
            WHERE LOWER(mi.name) LIKE LOWER(?)
            AND mi.price BETWEEN ? AND ?`,
            [like, minPrice, maxPrice]
        );
        return rows;
    }
};


export default MenuItem;