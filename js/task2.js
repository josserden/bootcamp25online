//todo Сховище

/*
 * Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

* Додай методи класу:

* getItems() - повертає масив товарів.
* addItem(item) - отримує новий товар та додає його до поточних.
* removeItem(item) - отримує товар і, якщо є, видаляє його з поточних.
 */

class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    // if (!this.items.includes(itemId)) {
    //   return console.log('Не знайдено!');
    // }

    this.items = this.items.filter(item => item !== itemId);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

console.log(storage.getItems());
storage.addItem('🍌');
console.log(storage.getItems());
storage.removeItem('🍋');
console.log(storage.getItems());

storage.removeItem('🔆');

const storage2 = new Storage();
console.log(storage2.getItems());
