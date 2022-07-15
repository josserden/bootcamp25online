//todo Масив об'єктів
/*
 * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Брильянт', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
];

function calcTotalPrice(array, stoneName) {
  for (const item of array) {
    if (item.name === stoneName) {
      return item.price * item.quantity;
    }
  }

  return `${stoneName} not found!`;
}

console.log(calcTotalPrice(stones, 'Брильянт'));
console.log(calcTotalPrice(stones, 'Сапфір'));
console.log(calcTotalPrice(stones, 'Ізумруд'));
console.log(calcTotalPrice(stones, 'Цегла'));
