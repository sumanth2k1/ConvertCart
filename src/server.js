import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';


import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';


dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development'
});


const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());


if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use('/api', routes);

app.get('/', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || 'development' }));

app.use(errorHandler);


console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS ? "***" : null,
  name: process.env.DB_NAME,
});


const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
console.log(`Server listening on port ${PORT} - env=${process.env.NODE_ENV}`);
});