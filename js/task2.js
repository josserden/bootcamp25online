//todo метод Object.values()
/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Jimmy: 150,
};

function getTotalSalary(object = {}) {
  const values = Object.values(object);
  let sum = 0;

  for (const value of values) {
    sum += value;
  }

  return sum;
}

console.log(getTotalSalary(salaries));
console.log(getTotalSalary());
