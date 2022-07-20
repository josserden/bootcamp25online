import { vehicles } from './vehicles.js';
console.table(vehicles);

/*
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (властивість onSale), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = cars =>
//   cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

const getSortedCarsOnSale = cars =>
  cars.reduce((acc, car) => {
    if (car.onSale) {
      acc.push(car);
    }

    return [...acc.sort((a, b) => a.price - b.price)];
  }, []);

console.table(getSortedCarsOnSale(vehicles));
