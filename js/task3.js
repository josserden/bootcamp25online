// todo Площа прямокутника
/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
 */

function getRectArea(dimensions) {
  const numbers = dimensions.split(' ');

  const a = Number(numbers[0]);
  const b = Number(numbers[1]);

  return a * b;
}

console.log(getRectArea('8 11'));
console.log(getRectArea('84 101'));
console.log(getRectArea('5 9'));
console.log(getRectArea('4 67'));
