import { users } from './users.js';
console.table(users);

/*
Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
*/

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((acc, { balance }) => acc + balance, 0);
};

console.log(getTotalBalanceByGender(users, 'female'));

// const updateAmount = (array, percent, gender) => {
//   return array
//     .map(item => ({
//       ...item,
//       balance: item.balance + item.balance * percent,
//     }))
//     .filter(user => user.gender === gender)
//     .reduce((acc, { balance }) => acc + balance, 0);
// };

// console.table(updateAmount(users, 0.2, 'male'));

// const getBalanceByUser = (users, userName) => {
//   let amount = 0;

//   users.find(({ name, balance }) => {
//     if (name === userName) {
//       amount = balance;
//     }
//   });

//   return amount;
// };

// console.log(getBalanceByUser(users, 'Elma Head'));
