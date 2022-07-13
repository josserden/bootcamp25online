/*
 * Створи скрипт, який приймає два числа a та b і повертає найбільший можливий результат серед виразів:
a + b
a — b
a * b
a / b
 */

const a = 50;
const b = 4;
let results = [a + b, a - b, a * b, a / b];

// let maxResult = results[0];

// for (const result of results) {
//   if (maxResult < result) {
//     maxResult = result;
//   }
// }

let maxResult = Math.max(a + b, a - b, a * b, a / b);
// let maxResult = Math.max(...results);

console.log(maxResult);
