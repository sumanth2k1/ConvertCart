# Restaurant Dish Search Microservice

A simple Node.js + Express + MySQL microservice that allows users to search for restaurants based on a **dish name**, with a **mandatory price range filter**.

When a user searches for a dish, the service returns the **top 10 restaurants** (by order count) where that dish has been ordered the most, and where the dish price lies within the given range.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MySQL (e.g. Railway MySQL)
- **ORM/Driver:** `mysql2/promise`
- **Validation:** Joi

# Prerequisites

Node.js (LTS)

npm

A MySQL database

Recommended: Railway MySQL instance

You need host, port, username, password, and database name (or a single DATABASE_URL)

Environment Configuration

The app supports both:

A single DATABASE_URL (recommended on Railway)

OR individual DB_* variables

Example: .env.development
PORT=3306
NODE_ENV=development

# EITHER: Use a full connection URL (common in Railway)
# mysql://user:password@host:port/database
DATABASE_URL=mysql://rail_user:rail_pass@mysql-host.railway.app:12345/rail_db

# OR: Individual vars (used if DATABASE_URL is not set)
DB_HOST=mysql-host.railway.app
DB_PORT=12345
DB_USER=rail_user
DB_PASS=rail_pass
DB_NAME=rail_db

# Enable SSL if Railway requires it
DB_SSL=true


Create similar files for:

.env 
# production env

# Clone the Repository


git clone <repository-url>
cd convertcart

Install Dependencies
pnpm install

# Environment Setup

Create a .env.development file in the project root.

⚠️ Do not commit .env files. They are already ignored via .gitignore.

Database Setup (Seed Data)

# The database schema and sample data are defined in:

src/config/seed.sql


This includes:

    Restaurants

    Menu items

    Orders (1 order = 1 item)

Run Seed Script

    pnpm run seed

Run the Application Locally

# Start the server in development mode:

pnpm run dev


# The server will start on:

http://localhost:3306

# Sample Input
    
    /search/dishes?name=biryani&minPrice=150&maxPrice=300