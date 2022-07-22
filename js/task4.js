// todo bind()

/*
 * Створіть метод counter який буде з this брати "i" і збільшувати його на одиницю. Після повертати "i".
 * Використовуйте замикання bind, щоб встановити змінній "i" різні значення
 * Виведіть результат у консоль
 */

function counter() {
  return function () {
    this.i += 1;

    return this.i;
  };
}

const objA = {
  i: 0,
};

const objB = {
  i: 99,
};

const count = counter().bind(objA);
const count2 = counter().bind(objB);

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
