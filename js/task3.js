//todo Example 3 - Глибока деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

function getBotReport({ companyName, stock: { repair, defense } }) {
  // const { repair, defense } = stock;

  const message = `${companyName} has ${defense + repair} goods in stock`;

  return message;
}

console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repair: 150,
      defense: 50,
    },
  }),
);
