import express from 'express';
import bodyParser from 'body-parser';
import colorMiddleware from './middleware/colorMiddleware.js';
import errorMiddleware from './middleware/errorHandler.js';
import TodosRouter from './routers/routes.js';


const { json } = bodyParser;

// Express Application
const app = express();
const port = 3000;
app.use(json());

app.post('/api/v1/todos', colorMiddleware());
app.patch('/api/v1/todos/:id', colorMiddleware());
app.put('/api/v1/todos/:id', colorMiddleware());

app.use('/api/v1/todos', TodosRouter);

// Error middleware MUST be last
app.use(errorMiddleware())
app.listen(port, () => {
  console.log(`Starting express application on port ${port} @ ${new Date().toISOString()}`);
});
