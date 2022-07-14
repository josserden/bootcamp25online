// todo Колекція курсів (includes, indexOf, push тощо)

/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(name) - додає курс до кінця колекції
* removeCourse(name) - видаляє курс із колекції
* updateCourse(oldName, newName) - змінює ім'я на нове
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function getUniqueCourse(course) {
  return courses.includes(course);
}

function addCourse(course) {
  // for (const element of courses) {
  //   if (element === course) {
  //     return console.log('Такий курс вже є !');
  //   }
  // }

  if (getUniqueCourse(course)) {
    return console.log('Такий курс вже є !');
  }

  courses.push(course);
}

function removeCourse(course) {
  if (!getUniqueCourse(course)) {
    return console.log('Курс не знайдено !');
  }

  for (const element of courses) {
    if (element === course) {
      const deletedElement = courses.indexOf(element);

      courses.splice(deletedElement, 1);
    }
  }
}

function updateCourse(oldName, newName) {
  if (!getUniqueCourse(oldName)) {
    return console.log('Курс не знайдено !');
  }

  for (const element of courses) {
    if (element === oldName) {
      const updatedElement = courses.indexOf(element);

      courses.splice(updatedElement, 1, newName);
    }
  }
}

addCourse('Express');
// addCourse('CSS');

removeCourse('React');
// removeCourse('Vue');

updateCourse('Express', 'NestJS');

console.table(courses);
