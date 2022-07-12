// todo Форматування посилання
/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай у кінець значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.
 */

let link = 'https://somesite.com/about';
let result;

// const string = link[link.length - 1];
// const indexLink = string === '/';

if (!link.endsWith('/') && link.includes('my-site')) {
  result = link + '/';
} else {
  result = link;
}

console.log(result);
