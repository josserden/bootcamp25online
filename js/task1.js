// todo Блогер

/*
* Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

* name - ім'я, рядок
* age - вік, число
* numberOfPosts - кількість постів, число
* topics - масив тем, на яких спеціалізується блогер

* Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.

* Додай метод getInfo(), який повертає рядок: User ${ім'я} is ${вік} years old and has ${кількість постів} posts.

* Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
*/

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  name: 'Mango',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango.getInfo());
mango.updatePostCount(10);
console.log(mango.getInfo());

const poly = new Blogger({
  name: 'Poly',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});

console.log(poly.getInfo());

const john = new Blogger({
  name: 'John',
  age: 39,
  numberOfPosts: 100,
  topics: ['politics', 'military', 'ballet'],
});

console.log(john.getInfo());
