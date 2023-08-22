// Reading a file asynchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
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
      console.log(`Number of students: ${lines.length}`);
      Object.entries(studentsByField).forEach(([field, students]) => {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });

      resolve(lines.length);
    });
  });
}

module.exports = countStudents;
