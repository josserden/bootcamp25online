// Imports
import { courses } from './courses.js';

// Variables
const ACTIVE_CLASS = 'is-active';
const filtersContainer = document.querySelector('.filters-container');
const coursesContainer = document.querySelector('.courses-container');

// const items = courses
//   .flatMap(item => item.tags)
//   .filter((item, index, array) => array.indexOf(item) === index);

const items = [...new Set(courses.flatMap(item => item.tags))];

// Functions
const renderFilters = () => {
  const markup = items
    .map(
      item => /* html */ `
      <button class="button" type="button" data-tag=${item}>${item}</button>
    `,
    )
    .join('');

  // const markup = items.reduce(
  //   (acc, item) =>
  //     acc + `<button class="button" type="button">${item}</button>`,
  //   '',
  // );

  filtersContainer.insertAdjacentHTML('beforeend', markup);
};

const renderCourses = items => {
  coursesContainer.innerHTML = '';

  const markup = items.reduce((acc, { name, prices }) => {
    acc += /* html */ `<li>${name} - <span class="accent">${prices} $</span></li>`;

    return acc;
  }, '');

  coursesContainer.insertAdjacentHTML('beforeend', markup);
};

const onHandlerFilterClick = event => {
  const filter = event.target; //  наш фільтр в який клікаємо
  const activeFilter = document.querySelector(`.${ACTIVE_CLASS}`); // знаходимо активний фільтр
  const filterValue = filter.dataset.tag; // значення дата-атрибуту

  // if (filter !== event.currentTarget) {
  //   filter.classList.add(ACTIVE_CLASS);
  // }

  if (filterValue) {
    filter.classList.add(ACTIVE_CLASS);
  }

  if (activeFilter) {
    activeFilter.classList.remove(ACTIVE_CLASS);
  }

  if (filter === activeFilter) {
    console.log('кнопка', filter);
    console.log('активна кнопка', activeFilter);

    return renderCourses(courses);
  }

  console.log('кнопка', filter);
  console.log('активна кнопка', activeFilter);

  const filteredItems = courses.filter(course =>
    course.tags.includes(filterValue),
  );

  renderCourses(filteredItems);
};

// Dark Mode
const options = {
  bottom: '64px', // default: '32px'
  right: '64px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🔆', // default: ''
  autoMatchOsTheme: true, // default: true
};

function addDarkmodeWidget() {
  new Darkmode(options).showWidget();
}

// Run Functions
renderFilters();
renderCourses(courses);

// Listeners
filtersContainer.addEventListener('click', onHandlerFilterClick);
window.addEventListener('load', addDarkmodeWidget);
