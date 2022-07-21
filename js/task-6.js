const numbers = [3, 6, 12, 65, 8888, 0, 9, 2, 1];

const fruits = ['banana', 'apple', 'grapes', 'Pineapple'];

console.log(numbers.sort((a, b) => a - b));
console.log(fruits.sort((a, b) => a.localeCompare(b)));
