/*
 * Инпут (input, focus, blur)

 * Зробіть так, щоб:
 * - при фокусі на інпут його border ставав жовтим (клас .active)
 * - при введенні в інпуті введений текст потрапляв до абзацу під інпутом (trim)
 * - при втраті фокусу прибираємо жовту рамку та перевіряємо текст в інпуті: якщо він порожній, фарбуємо border у червоний колір (клас .error)
 * - при повторному введенні червона рамка повинна відразу пропадати
*/

// Refs
const refs = {
  input: document.querySelector('input[name="message"]'),
  output: document.querySelector('.text'),
};

// Functions
const onFocus = () => {
  refs.input.classList.add('active');

  refs.input.classList.remove('error');
  refs.input.classList.remove('valid');
};

const onInput = event => {
  const { value } = event.target;

  refs.output.textContent = value.trim();
};

const onBlur = event => {
  const { value } = event.target;

  refs.input.classList.remove('active');

  value.trim()
    ? refs.input.classList.add('valid')
    : refs.input.classList.add('error');
};

// Listeners
refs.input.addEventListener('focus', onFocus);
refs.input.addEventListener('input', onInput);
refs.input.addEventListener('blur', onBlur);
