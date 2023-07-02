export default class HolbertonCourse {
  constructor(name, length, students) {
    const _name = Object.prototype.toString.call(name);
    const _length = Object.prototype.toString.call(length);
    const _students = Object.prototype.toString.call(students);
    if (_name !== '[object String]') { throw TypeError('Name must be a string'); }
    if (_length !== '[object Number]') { throw TypeError('Length must be a number'); }
    if (_students !== '[object Array]') { throw TypeError('Students must be an array'); }
    if (students.every((student) => typeof student === 'string')) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else { throw TypeError('Students must be an array of strings'); }
  }

  get name() { return this._name; }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else { throw TypeError('Name must be a string'); }
  }

  get length() { return this._length; }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else { throw TypeError('Length must be a number'); }
  }

  get students() { return this._students; }

  set students(newStudents) {
    if (newStudents.every((student) => typeof student === 'string')) {
      this._students = newStudents;
    } else { throw TypeError('Students must be an array of strings'); }
  }
}
