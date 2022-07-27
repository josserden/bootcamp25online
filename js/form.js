/*
 * TODO list
 * (change, submit, preventDefault, form.elements, form.reset())

* Є форма з одним інпутом, куди вводиться текст. І є чекбокс.
 * 1) Поки чекбокс не натиснутий, кнопка на формі неактивна.
 * 2) Натисканням Enter в інпуті або натисканням на кнопку Add, в список нижче, додається todo.
 * 3) Прибрати перезавантаження, звертатися через форму (elements) та ім'я інпуту
 * 4) Очистити інпут та чекбокс
 * 5) При натисканні на todo-замітку у списку, вона стає виконаною, тобто текст закреслюється (клас complete)
 * 6) При додаванні нотатки кнопка повинна знову стати недоступною
 * 7) Створення todo винести в окрему функцію
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
  // if (event.target.checked) {
  //   refs.button.disabled = false;
  // } else {
  //   refs.button.disabled = true;
  // }

  // refs.button.disabled = event.target.checked ? false : true;

  refs.button.disabled = !event.target.checked;
};

const addTodo = text => {
  const todoElement = document.createElement('li');
  todoElement.textContent = text;

  todoElement.addEventListener('click', () =>
    todoElement.classList.toggle('complete'),
  );

  refs.list.append(todoElement);
};

// Listeners
refs.form.addEventListener('submit', onSubmit);
refs.checkbox.addEventListener('change', handleChange);
