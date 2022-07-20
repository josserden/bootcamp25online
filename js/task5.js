import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
 */

console.table(getCarsWithType(vehicles, 'suv'));
console.table(getCarsWithType(vehicles, 'sedan'));
