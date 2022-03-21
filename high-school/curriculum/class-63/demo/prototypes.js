// Student Record Constructor
// this is the "blueprint" for all student records that will be instantiated on demand
// using the "new" keyword later
function StudentRecord(student, instructor, title, grade) {
  this.student = student;
  this.instructor = instructor;
  this.title = title;
  this.grade = grade;
}

// when invoked, quickLook will print the student name, course title, and instructor
// for that unique object that this was called upon
StudentRecord.prototype.quickLook = function() {
  return this.student + ' is enrolled in ' + this.title + ' with ' + this.instructor + ' as their instructor.';
}

// creates an aggregate object using all properties of the
// instantiated object
StudentRecord.prototype.generateReportCard = function() {
  return {
    name: this.student,
    course: this.title,
    instructor: this.instructor,
    quickLook: this.quickLook(), // calls the quickLook prototype method above
    status: function() {
      if (this.grade > 69) {
        return "passed"
      } else {
        return "failed"
      }
    }
  }
}

// create the student record objects to demonstrate
let sally = new Course('Sally Sallyson', 'Bob Boberson', 'Art 101', 97);
let tim = new Course('Tim Timmerson', 'Tara Tarason', 'Science 101', 97);


tim.quickLook();
tim.generateReportCard();

sally.quickLook();
sally.generateReportCard();
