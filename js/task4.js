// todo

/*
 * Перепиши функцію так, щоб вона приймала об'єкт параметрів з властивостями companyName і stock і виводила репорт про кількість товарів у складі будь-якої компанії. */

function getStockReport({ stock, companyName }) {
  let total = 0;
  let message;

  for (const value of Object.values(stock)) {
    total += value;
  }

  message = `${companyName} has ${total} items in stock`;

  return message;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenseBots: 50,
    },
  }),
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }),
); // "Belacci has 35 item in stock"

console.log(
  getStockReport({
    companyName: 'ATB',
    stock: {
      potatoes: 230,
      eggs: 110,
      chicken: 65,
      fish: 30,
    },
  }),
); // "ATB has 35 item in stock"
