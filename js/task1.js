// todo Майстерня коштовностей

/*
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
 */

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    // return this.stones.reduce((acc, { name, price, quantity }) => {
    //   if (name === stoneName) {
    //     acc = price * quantity;
    //   }

    //   return acc;
    // }, 0);

    const findStone = this.stones.find(({ name }) => name === stoneName);

    if (!findStone) {
      return `Вибачте, ${stoneName} відсутній в базі`;
    }

    return findStone.price * findStone.quantity;
  },
};

console.log(chopShop.calcTotalPrice('Diamond'));
console.log(chopShop.calcTotalPrice('Gold'));
