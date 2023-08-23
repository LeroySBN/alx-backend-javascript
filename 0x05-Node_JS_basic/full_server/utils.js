// reads the database asynchronously and returns a Promise
const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift();
      const headers = header.split(',');
      const fieldIndex = headers.indexOf('field');
      const firstnameIndex = headers.indexOf('firstname');
      const studentsByField = {};
      lines.forEach((line) => {
        const columns = line.split(',');
        const field = columns[fieldIndex];
        const firstname = columns[firstnameIndex];
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });
      resolve(studentsByField);
    });
  });
}

module.exports = {
  readDatabase,
};
