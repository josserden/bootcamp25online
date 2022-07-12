// todo Вкладені розгалуження
/*
 * Напиши скрипт, який порівнює числа змінних a і b. Якщо обидва значення більше 100, виведи в консоль максимальне з них. Інакше у консолі має бути сума значення b та числа 512.
 */

const limit = 100;
const stock = 512;

const a = 500;
const b = 2000;

let result;

if (a > limit && b > limit) {
  // if (a > b) {
  //   result = a;
  // } else {
  //   result = b;
  // }

  // result = a > b ? a : b;
  result = Math.max(a, b);
} else {
  result = b + stock;
}

console.log(result);
