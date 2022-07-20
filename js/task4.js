import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
 */

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

const getCarsWithDiscount = cars => cars.some(car => car.onSale);

console.table(getCarsWithDiscount(vehicles));
