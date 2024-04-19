import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import colorToHex from './middlewares/colorMiddleware.js';
import errorMiddleware from './middlewares/errorHandler.js';
import TodosRouter from './routers/routes.js';

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

// Error middleware MUST be last
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Starting express application on port ${port} @ ${new Date().toISOString()}`);
});


