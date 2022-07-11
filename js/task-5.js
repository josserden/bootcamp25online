// todo Example 5 - Шаблонні рядки

/*
 * Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
 */

const companyName = 'Apple';
const repairBots = 1150;
const defenseBots = 50;
const total = repairBots + defenseBots;
// const message =
//   'Cyberdyne Systems has ' + (repairBots + defenseBots) + ' bots in stock';

const message = `${companyName} has ${total} bots in stock`;

console.log(message);
