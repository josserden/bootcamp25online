/*
 * TODO list
 * Рефакторинг за допомогою делегування
 * Додання можливості видалення тудушки
 */

// Create an instance of Notyf
const notyf = new Notyf();

// Refs
const refs = {
  form: document.querySelector('.js-form'),
  checkbox: document.querySelector('input[name="confirm"]'),
  list: document.querySelector('.js-list'),
  button: document.querySelector('[type="submit"]'),
};

// Function
const onSubmit = event => {
  event.preventDefault();

  const { value } = event.target.elements.todo;
  const normalizedValue = value.trim();

  if (!normalizedValue) {
    notyf.error('Enter some text !');
    return;
  }

  addTodo(normalizedValue);
  notyf.success('Todo added !');

  refs.button.disabled = true;
  refs.form.reset();
};

const handleChange = event => {
  refs.button.disabled = !event.target.checked;
};

const onItemClick = event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('complete');
  }

  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
};

const addTodo = text => {
  const todoElement = document.createElement('li');
  todoElement.textContent = text;

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn-delete');
  button.textContent = 'Delete';

  todoElement.append(button);

  refs.list.append(todoElement);
};

// Listeners
refs.form.addEventListener('submit', onSubmit);
refs.checkbox.addEventListener('change', handleChange);
refs.list.addEventListener('click', onItemClick);
