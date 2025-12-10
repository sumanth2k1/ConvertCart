import pool from '../config/db.js';


export const Order = {
    async getAggregatedOrders(namePattern, minPrice, maxPrice) {
        const sql = `
            SELECT r.id AS restaurantId,
                r.name AS restaurantName,
                r.city,
                mi.name AS dishName,
                mi.price AS dishPrice,
                COUNT(o.id) AS orderCount
            FROM menu_items mi
            JOIN restaurants r ON r.id = mi.restaurant_id
            LEFT JOIN orders o ON o.menu_item_id = mi.id
            WHERE LOWER(mi.name) LIKE LOWER(?)
            AND mi.price BETWEEN ? AND ?
            GROUP BY r.id, mi.id
            HAVING orderCount > 0
            ORDER BY orderCount DESC
            LIMIT 10
        `;
        const [rows] = await pool.query(sql, [`%${namePattern}%`, minPrice, maxPrice]);
        return rows;
    }

};


export default Order;