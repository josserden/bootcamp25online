/*
 * Є масив. Значення в масиві будуть або числами, рядками, або їх комбінацією. Ваше завдання - повернути масив, в якому будуть йти спочатку числа, відсортовані в порядку зростання, а потім рядки, відсортовані в алфавітному порядку. Значення повинні зберегти свій вихідний тип. Якщо на вході був рядок, то й повернутися повинен рядок, якщо число - число.
 */

// Приклад:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

const sorArray = array => {
  return array
    .reduce((acc, element) => {
      typeof element === 'string' ? acc.push(element) : acc.unshift(element);

      return acc;
    }, [])
    .sort((a, b) => {
      return typeof a === 'string' ? a.localeCompare(b) : a - b;
    });
};

console.log(sorArray(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
