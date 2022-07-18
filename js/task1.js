//todo Example 1 - Деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

function calcBMI({ height, weight }) {
  // const { weight, height } = params;

  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));

  let bmi = (numericWeight / numericHeight ** 2).toFixed(1);
  bmi = Number(bmi);

  return bmi;
}

console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  }),
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  }),
);
