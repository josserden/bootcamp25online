const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const findName = this.potions.find(({ name }) => name === newPotion.name);

    if (findName) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    this.potions = this.potions.filter(potion => potion.name !== potionName);
  },

  updatePotionName(oldName, newName) {
    const findName = this.potions.find(({ name }) => name === oldName);

    if (findName) {
      findName.name = newName;
    }
  },
};

atTheOldToad.addPotion({ name: 'John Doe', price: 500 });

atTheOldToad.removePotion('Doe');

atTheOldToad.updatePotionName('Stone skin', 'New potion');

console.table(atTheOldToad.getPotions());
