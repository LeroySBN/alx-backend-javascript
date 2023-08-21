// Using Process stdin
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let lines = data.split('\n');
    // const fields = lines[0].split(',');
    // console.log(fields);
    lines = lines.slice(1, lines.length);
    // console.log(lines);
    console.log(`Number of students: ${lines.length}`);
    const students = {};
    for (const line of lines) {
      if (line.length > 0) {
        const student = line.split(',');
        const field = student[3];
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(student[0]);
      }
    }
    // console.log(students);
    console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
    console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
