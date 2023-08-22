// A small HTTP server using Node's HTTP module
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    await countStudents(databasePath)
      .then((studentsInfo) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const responseContent = `This is the list of our students\n${studentsInfo}`;
        res.end(responseContent);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
