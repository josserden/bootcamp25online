// Refs
const TRANSACTIONS = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const totalBalance = document.querySelector('.js-total-balance');
const totalDeposit = document.querySelector('.js-total-deposit');
const form = document.querySelector('.js-form');
const historyList = document.querySelector('.js-history-list');
const operations = [];

// Functions
const getBalance = array => array.reduce((acc, { amount }) => acc + amount, 0);

const createMarkup = () => {
  historyList.innerHTML = '';

  const markup = operations
    .map(
      ({ amount, description }) => /* html */ `
      <li
        class="list-group-item d-flex align-items-center justify-content-between border border-1 rounded px-4 py-2 text-dark bg-opacity-10 mb-3 bg-success"
      >
        <span class="fs-5">${amount}</span>
        <span class="fs-5">${description} &#8372;</span>
      </li>
    `,
    )
    .join('');

  historyList.insertAdjacentHTML('beforeend', markup);
};

// const createMarkup = ({ amount, description }) => {
//   const item = document.createElement('li');
//   item.classList.add(
//     'list-group-item',
//     'd-flex',
//     'align-items-center',
//     'justify-content-between',
//     'border',
//     'border-1',
//     'rounded',
//     'px-4',
//     'py-2',
//     'text-dark',
//     'bg-opacity-10',
//     'mb-3',
//     'bg-success',
//   );
//   const textWrapper = document.createElement('span');
//   textWrapper.classList.add('fs-5');
//   textWrapper.textContent = description;

//   const iconWrapper = document.createElement('span');
//   iconWrapper.classList.add('fs-5');
//   iconWrapper.textContent = amount;

//   item.append(textWrapper, iconWrapper);

// historyList.append(item);
// };

const handleFormSubmit = event => {
  event.preventDefault();

  const { amount, description } = event.target.elements;
  const normalizeDescription = description.value.trim();

  if (normalizeDescription === '') {
    return alert('Заповніть поле!');
  }

  const newOperation = {
    amount: Number(amount.value),
    description: normalizeDescription,
    id: operations.length + 1,
    type: TRANSACTIONS.DEPOSIT,
  };

  operations.push(newOperation);

  console.log(operations);

  totalBalance.textContent = getBalance(operations);
  totalDeposit.textContent = getBalance(operations);

  createMarkup();

  form.reset();
};

// Listeners
form.addEventListener('submit', handleFormSubmit);

/*
<li
  class="list-group-item d-flex align-items-center justify-content-between border border-1 rounded px-4 py-2 text-dark bg-opacity-10 mb-3 bg-success"
>
  <span class="fs-5">Отримав аванс</span>
  <span class="fs-5">600 &#8372;</span>
</li>

<li
  class="list-group-item d-flex align-items-center justify-content-between border border-1 rounded px-4 py-2 text-dark bg-opacity-10 mb-3 bg-danger"
>
  <span class="fs-5">Купив квитки в кіно</span>
  <span class="fs-5">1200 &#8372;</span>
</li>
*/
