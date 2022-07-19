//todo Колбек функції
/*
 * Напишіть такі функції:

* createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
* logProduct(product) - колбек, що приймає об'єкт продукту і логує його в консоль
* logTotalPrice(product) - колбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль
 */

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function createProduct(product, callback) {
  const updateProduct = {
    ...product,
    id: generateId(),
  };

  callback(updateProduct);
}

function logProduct(product) {
  console.log(product);
}

function logTotalProductPrice({ price, quantity }) {
  console.log(price * quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalProductPrice);
