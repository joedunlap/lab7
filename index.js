import express from 'express';
import bodyParser from 'body-parser';
// TODO make HEX COLOR MIDDLEWARE
// ERROR MIDDLEWARE
// ROUTER

const { json } = bodyParser;

// Express Application
const app = express();
const port = 3000;
app.use(json());

// Here will go app.etc for TODO list

// ERROR middleware last here

app.listen(port, () => {
  console.log(`Starting express application on port ${port} @ ${new Date().toISOString()}`);
});
