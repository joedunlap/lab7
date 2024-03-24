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


// --TODO see if updating and deleting return 404 if id does not exist
/* n your model, print the todo object to the console when it is provided by user input (PUT, POST, PATCH). Hard code a small array of three items in your model to simulate a database. Return this array for the "get all todos" logic and search it to return a single item for "get one todo by ID". Return a 404 if the requested ID does not exist.
When updating or deleting a todo item, if the provided ID does not exist in your hard coded array of items, return a 404. */