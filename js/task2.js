//todo Example 2 - Деструктуризація
/*
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
 */

function printContactsInfo({ phones, names } = {}) {
  if (!phones || !names) {
    console.log('Нічого не передано');
    return;
  }

  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  for (let i = 0; i < namesArr.length; i += 1) {
    const name = namesArr[i];
    const phone = phonesArr[i];

    console.log(`${name} - ${phone}`);
  }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
