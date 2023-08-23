const path = require('path');
const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsData = await readDatabase('../database.csv');
      const responseContent = `
This is the list of our students
${Object.keys(studentsData)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((field) => `Number of students in ${field}: ${studentsData[field].length}. List: ${studentsData[field].join(', ')}`)
    .join('\n')}
`;
      res.status(200).send(responseContent);
    } catch (error) {
      console.error('Error loading database:', error);
      res.status(500).send('Cannot load the database\n');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toLowerCase();
    if (major !== 'cs' && major !== 'swe') {
      res.status(500).send('Major parameter must be CS or SWE\n');
      return;
    }

    try {
      const studentsData = await readDatabase(path.join(__dirname, 'database.csv'));
      const responseContent = `
List: ${studentsData[major.toUpperCase()].join(', ')}
`;
      res.status(200).send(responseContent);
    } catch (error) {
      console.error('Error loading database:', error);
      res.status(500).send('Cannot load the database\n');
    }
  }
}

module.exports = StudentsController;
