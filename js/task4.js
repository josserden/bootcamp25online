// todo Форматування посилання
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.
 */

let link = 'https://my-site.com/about';
let result;

if (!link.endsWith('/')) {
  result = link + '/';
} else {
  result = link;
}

console.log(result);
