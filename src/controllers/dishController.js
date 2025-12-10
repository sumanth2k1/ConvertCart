import Joi from 'joi';
import pool from '../config/db.js';


const querySchema = Joi.object({
    name: Joi.string().min(1).required(),
    minPrice: Joi.number().min(0).required(),
    maxPrice: Joi.number().min(0).required()
}).with('minPrice', 'maxPrice');


export async function searchDishes(req, res, next) {
    try {
        const { error, value } = querySchema.validate(req.query, { convert: true });
        if (error) return res.status(400).json({ error: error.message });
        // console.log('Validated Query:', value);

        const { name, minPrice, maxPrice } = value;

        const sql = `
            SELECT
            r.id AS restaurantId,
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

        const [rows] = await pool.query(sql, [`%${name}%`, minPrice, maxPrice]);

        return res.json({ restaurants: rows });
    } catch (err) {
        next(err);
    }
}


export default { searchDishes };