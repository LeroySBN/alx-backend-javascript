import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];
    const studentsInfo = await readDatabase(databasePath);
    res.send(`This is the list of our students\n${studentsInfo}`);
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const studentsInfo = await readDatabase(databasePath);
    const { major } = req.params;
    if (major === 'CS' || major === 'SWE') {
      const studentsByMajor = studentsInfo.filter((student) => student.field === major);
      const studentsNames = studentsByMajor.map((student) => student.firstName);
      res.send(`These are the list of our students\n${studentsNames.join('\n')}`);
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
