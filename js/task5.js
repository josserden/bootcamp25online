import { vehicles } from './vehicles.js';
console.table(vehicles);
/*
 * Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається зі значенням параметра type.
 */

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// const getCarsWithType2 = (cars, type) =>
//   cars.reduce((acc, car) => {
//     if (car.type === type) {
//       acc.push(car);
//     }

//     return acc;
//   }, []);

console.table(getCarsWithType(vehicles, 'suv'));
console.table(getCarsWithType(vehicles, 'sedan'));
