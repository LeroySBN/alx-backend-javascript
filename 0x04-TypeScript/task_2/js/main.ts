interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => "Working from home";
  getCoffeeBreak = (): string => "Getting a coffee break";
  workDirectorTasks = (): string => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => "Cannot work from home";
  getCoffeeBreak = (): string => "Cannot have a break";
  workTeacherTasks = (): string => "Getting to work";
}

function createEmployee(salary: number | string) : Director | Teacher {
  if (typeof(salary) === 'number' && salary < 500) {
    return new Teacher()
  } else {
    return new Director()
  }
}

const isDirector = (employee: Director | Teacher): boolean => employee instanceof Director;

const executeWork = (employee: Director | Teacher): string => {
  if (isDirector(employee)) {
    const employee2 = employee as Director;
    return employee2.workDirectorTasks();
  } else {
    const employee2 = employee as Teacher;
    return employee2.workTeacherTasks();
  }
};

type Subjects = "Math" | "History"

const teachClass = (todayClass: Subjects): string => {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
};

export { Director, Teacher, createEmployee, isDirector, executeWork, teachClass };
