// todo Введення користувача та розгалуження
/*
 * Напиши скрипт, який питатиме логін за допомогою prompt і логуватиме результат у консоль браузера.

* Якщо відвідувач вводить "Адмін", то prompt запитує пароль
* Якщо нічого не введено або натиснута клавіша Esc - вивести рядок "Скасовано"
* В іншому випадку вивести рядок "Я вас не знаю"

* Пароль перевіряти так:
* Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!!"
* Інакше виводити рядок "Невірний пароль"
*/

const LOGIN = 'Адмін';
const PASSWORD = 'Я адмін';

const userLogin = prompt('Введіть ваш логін');
let message;

switch (userLogin) {
  case LOGIN:
    const userPassword = prompt('Введіть ваш пароль');

    message = userPassword === PASSWORD ? 'Вітаю!!!' : 'не вірний пароль!';
    break;

  case null:
    message = 'Скасовано';
    break;

  default:
    message = 'Я вас не знаю';
}

// if (userLogin === LOGIN) {
//   const userPassword = prompt('Введіть ваш пароль');

// if (userPassword === PASSWORD) {
//   message = 'Вітаю, бос!!!';
// } else {
//   message = 'Не вірний пароль! ';
// }

//   message = userPassword === PASSWORD ? 'Вітаю!!!' : 'не вірний пароль!';
// } else if (userLogin === null) {
//   message = 'Скасовано';
// } else {
//   message = 'Я вас не знаю';
// }

console.log(message);
