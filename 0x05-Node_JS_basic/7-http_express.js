// Create a more complex HTTP server using Express
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Create a route for GET requests to /hello, and return a JSON response
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Create a route for GET requests to /students, and return a JSON response
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((studentsInfo) => {
      res.send(`This is the list of our students\n${studentsInfo}`);
    })
    .catch((error) => {
      res.send(`${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
