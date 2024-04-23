import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import colorToHex from './middlewares/colorMiddleware.js';
import errorMiddleware from './middlewares/errorHandler.js';
import TodosRouter from './routers/routes.js';
import { db } from './lib/database.js';

const { json } = bodyParser;
// Express Application
const app = express();
const port = 3000;

app.use(json());

// Routes
app.post('/api/v1/todos', colorToHex);
app.patch('/api/v1/todos/:id', colorToHex);
app.put('/api/v1/todos/:id', colorToHex);

app.use('/api/v1/todos', TodosRouter);

// Catch-all route for handling undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found, check url' });
});

// Error middleware MUST be last
app.use(errorMiddleware);

const mongoConfig = config.get('mongo');
console.log(mongoConfig);

db.init(mongoConfig);

app.listen(port, () => {
  console.log(`Starting express application on port ${port} @ ${new Date().toISOString()}`);
});
