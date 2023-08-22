// Using Process stdin
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    console.log(data);
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    console.log(lines);
    const header = lines.shift();
    console.log(header);
    const headers = header.split(',');
    const fieldIndex = headers.indexOf('field');
    console.log(fieldIndex);
    const firstnameIndex = headers.indexOf('firstname');
    const studentsByField = {};
    lines.forEach((line) => {
      const columns = line.split(',');
      console.log(columns);
      const field = columns[fieldIndex];
      console.log(field);
      const firstname = columns[firstnameIndex];
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });
    console.log('====================================');
    console.log(`Number of students: ${lines.length}`);
    Object.entries(studentsByField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
