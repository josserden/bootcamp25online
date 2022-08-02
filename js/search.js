// Imports
import { contacts } from './data/contacts.js';

// Refs
const searchInput = document.querySelector('.js-input');
const contactsList = document.querySelector('.js-contacts-list');

// Run Functions
renderMarkup(contacts);

// Listeners;
searchInput.addEventListener(
  'input',
  _.debounce(handleInputChange, 300, { leading: true, trailing: false }),
);

// Functions
function handleInputChange(event) {
  const inputValue = event.target.value.toLowerCase().trim();

  if (!inputValue) return;

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(inputValue),
  );

  renderMarkup(filteredContacts);
}

function renderMarkup(items) {
  contactsList.innerHTML = '';

  const markup = items
    .map(
      ({ name, rating }) => /* html */ `
      <li
      class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span class="fw-bold flex-grow-1 ms-3">${name}</span>
        <span class="badge bg-primary rounded-pill">${
          rating ? rating : 0
        }</span>
      </li>
      `,
    )
    .join('');

  contactsList.insertAdjacentHTML('beforeend', markup);
}
