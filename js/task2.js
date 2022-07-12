// todo Розгалуження
/*
 * Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".
 */

const userRequest = prompt('Введіть число', 0);
const normalizedNumber = Number(userRequest);
let message;

if (normalizedNumber > 0) {
  message = 'Це позитивне число';
} else if (normalizedNumber === 0) {
  message = 'Це нуль';
} else {
  message = "Це від'ємне число";
}

console.log(message);
