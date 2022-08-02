// Refs
const button = document.querySelector('.js-button');
const { body } = document;

// Listeners
button.addEventListener('click', _.throttle(handleButtonClick, 800));

// Functions

function handleButtonClick() {
  body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
