//todo Колбек функції
/*
 * Додайте об'єкту обліковий запис методами withdraw (amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.

* Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
  name: 'John',
  balance: 0,

  withdraw(amount, onSuccess, onError) {
    // if (amount > TRANSACTION_LIMIT) {
    //   onError(`Не можемо зняти суму більше ніж ліміт - ${TRANSACTION_LIMIT}`);
    // } else if (amount > this.balance) {
    //   onError(`Не можемо зняти суму більше ніж рахунку - ${this.balance}`);
    // } else {
    //   onSuccess('Операція успішна');
    // }

    if (amount > TRANSACTION_LIMIT) {
      onError(`Не можемо зняти суму більше ніж ліміт - ${TRANSACTION_LIMIT}`);
      return;
    }

    if (amount > this.balance) {
      onError(`Не можемо зняти суму більше ніж рахунку - ${this.balance}`);
      return;
    }

    this.balance -= amount;
    onSuccess('Операція успішна');
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(
        `Не можемо поповнити на суму більше ніж ліміт - ${TRANSACTION_LIMIT}`,
      );
      return;
    }

    if (amount <= this.balance) {
      onError(`Не можемо поповнити на суму ніж меншу за нуль`);
      return;
    }

    this.balance += amount;

    onSuccess('Операція успішна');
  },
};

function handleSuccess(message) {
  console.warn(`✅ Success! ${message}`);
}

function handleError(message) {
  console.error(`❌ Error! ${message}`);
}

account.deposit(100, handleSuccess, handleError);
account.withdraw(200, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
