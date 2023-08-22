// Create a small HTTP server using Express
const express = require('express');

const app = express();
const port = 1245;

// Create a route for GET requests to /hello, and return a JSON response
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
