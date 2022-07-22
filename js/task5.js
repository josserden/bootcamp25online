// todo call() apply()

/*
 * Створіть функцію hostGuests яка поверне ім'я будинку та гостей у ньому
 * Викличте її за допомогою call і apply поставивши контекст і гостей як аргумент
 */

const guests = ['Anna', 'Jack', 'Jimmy'];
const newGuests = ['John', 'Vasyl'];

const place1 = {
  house: 'Palace',
};

const place2 = {
  house: 'Barn',
};

function hostGuests(...names) {
  console.log(`${names.join(', ')} are staying in ${this.house}`);
}

hostGuests.call(place1, ...guests, ...newGuests);
hostGuests.call(place2, ...guests, 'Vasyl');

hostGuests.apply(place1, [...guests, ...newGuests]);
hostGuests.apply(place2, [...guests, 'Vasyl']);

// Anna, Jack, Jimmy, John are staying in Palace
