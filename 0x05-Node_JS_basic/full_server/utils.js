// reads the database asynchronously
// and returns a Promise
import fs from 'fs';

function readDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile('./database.json', (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
}

module.exports = readDatabase;
