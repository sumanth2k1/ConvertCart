DROP TABLE IF EXISTS orders;

DROP TABLE IF EXISTS menu_items;

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

-- for simplicity, one order has one item
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    menu_item_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
);

-- Seed data
INSERT INTO
    restaurants (name, city)
VALUES
    ('Hyderabadi Spice House', 'Hyderabad'),
    ('Bombay Bites', 'Mumbai'),
    ('Lucknowi Delights', 'Lucknow'),
    ('Biryani Hub', 'Bengaluru'),
    ('Coastal Curries', 'Chennai');

INSERT INTO
    menu_items (restaurant_id, name, price)
VALUES
    (1, 'Chicken Biryani', 220.00),
    (1, 'Hyderabadi Mutton Biryani', 320.00),
    (2, 'Veg Biryani', 180.00),
    (2, 'Chicken Biryani', 210.00),
    (3, 'Lucknowi Chicken Biryani', 250.00),
    (4, 'Special Biryani', 275.00),
    (5, 'Fish Biryani', 260.00);

-- Orders (randomized counts)
-- Hyderabadi Spice House: Chicken Biryani (id = 1) -> 96 orders
INSERT INTO
    orders (menu_item_id, quantity)
VALUES
    -- id 1: Chicken Biryani (restaurant 1)
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
    (1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1),
(1, 1);

-- Small counts for others
INSERT INTO
    orders (menu_item_id, quantity)
VALUES
    (4, 1),
(4, 1),
(4, 1),
(4, 1),
(4, 1),
(4, 1),
(4, 1),
(4, 1),
(4, 1),
(4, 1),
    (3, 1),
(3, 1),
(3, 1),
(5, 1),
(5, 1),
(6, 1),
(7, 1),
(7, 1);