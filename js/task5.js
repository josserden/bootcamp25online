// todo Toggle

/*
 * Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчанням значення властивості on має бути false.
 */

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');

// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);

// console.groupEnd('firstToggle');

const secondToggle = new Toggle();
// console.group('secondToggle');

// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);

// console.groupEnd('secondToggle');

const button = document.querySelector('.js-button');
button.textContent = firstToggle.on ? 'Open' : 'Close';

button.addEventListener('click', event => {
  firstToggle.toggle();

  event.target.textContent = firstToggle.on ? 'Open' : 'Close';
});

const button2 = document.querySelector('.js-button2');
button2.textContent = secondToggle.on ? 'Open' : 'Close';

button2.addEventListener('click', event => {
  secondToggle.toggle();

  event.target.textContent = secondToggle.on ? 'Open' : 'Close';
});

console.dir(Object.prototype);
