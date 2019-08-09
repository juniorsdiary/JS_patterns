// Flyweight is usefull when we are dealing with a lot of objects storing and handling data.
// Common approach to implement this pattern is to divide object's properties and methods.
// First we have object constructor for creating objects with unique data.
// Then we have constructor for creating handling methods with these objects
// The main reason for that is to minimize memory usage of the app

// We have object responsible for creating certain student with unique data like id and grades
function Student(id, grades) {
  this.id = id;
  this.grades = grades;
}

// Then we creating module Factory to handle creating new examples and return if it already exists
const StudentsFactory = (() => {
  const students = {};
  let student;
  return {
    assignStudent: (id, grades) => {
      student = students[id];
      if (student === undefined) {
        student = new Student(id, grades);
        students[id] = student;
        return student;
      }
      return student;
    },
  };
})();
// Then we have manager of all students to hande changing data of their state like grades
const StudentsManager = (() => {
  const studentsRecords = {};
  return {
    addStudentsToDataBase: (id, grades) => {
      const student = StudentsFactory.assignStudent(id, grades);
      studentsRecords[id] = {
        student,
      };
    },
  };
})();

const createGrades = () => {
  const grades = [];
  for (let i = 0; i < 5; i++) {
    const grade = Math.floor(Math.random() * 10);
    grades.push(grade);
  }
  return grades;
};

for (let i = 0; i < 1000; i++) {
  StudentsManager.addStudentsToDataBase(i, createGrades());
}
