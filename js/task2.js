import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => {
    const { price } = car;
    const sale = price * discount;

    return {
      ...car,
      price: price - sale,
    };
  });

console.table(makeCarsWithDiscount(vehicles, 0.2));
console.table(makeCarsWithDiscount(vehicles, 0.4));
