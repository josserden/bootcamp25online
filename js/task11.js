import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
 */

const getModelsOnSale = cars =>
  cars.filter(car => car.onSale).map(car => car.model);

// const getModelsOnSale = cars =>
//   cars.reduce((acc, car) => {
//     if (car.onSale) {
//       acc.push(car.model);
//     }

//     return acc;
//   }, []);

console.table(getModelsOnSale(vehicles));
