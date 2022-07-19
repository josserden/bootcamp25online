// todo Метод forEach

/*
 * Виконайте рефакторинг коду, використовуючи метод для Each і стрілочні функції.
 */

const printContactsInfo = ({ names, phones }) => {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  namesArr.forEach((name, index) =>
    console.log(`${name} - ${phonesArr[index]}`),
  );
};

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
