// todo Калькулятор

/*
 * Створіть об'єкт calculator із трьома методами:

* read(firstValue, secondValue) - приймає два значення та зберігає їх як властивості об'єкта.
* add() - повертає суму збережених значень.
* mult() - перемножує збережені значення та повертає результат.
 */

const calculator = {
  firstValue: 0,
  secondValue: 0,

  read(a, b) {
    this.firstValue = a;
    this.secondValue = b;
  },

  add() {
    const { firstValue, secondValue } = this;

    return firstValue + secondValue;
  },

  mult() {
    const { firstValue, secondValue } = this;

    return firstValue * secondValue;
  },
};

calculator.read(10, 20);

console.log(calculator.add());
console.log(calculator.mult());
