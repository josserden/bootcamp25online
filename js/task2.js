//todo Колбек функції
/*
 * Додайте об'єкту обліковий запис методами withdraw (amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.

* Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  name: 'John',
  balance: 2000,

  withdraw(amount, onSuccess, onError) {},

  deposit(amount, onSuccess, onError) {},
};

function handleSuccess(message) {
  console.warn(`✅ Success! ${message}`);
}

function handleError(message) {
  console.error(`❌ Error! ${message}`);
}
