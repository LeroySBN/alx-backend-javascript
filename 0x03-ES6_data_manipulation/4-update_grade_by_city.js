export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map((student) => {
    const newGrade = newGrades.filter((newGrade) => newGrade.studentId === student.id)[0];
    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }
    return student;
  });
}
