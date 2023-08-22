// Using Process stdin
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
