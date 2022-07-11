// todo Example 9 - Значення за замовчуванням та оператор нульового злиття
/*
 * Відрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно дорівнює undefined або null. Інакше має надаватися значення defaultValue. Перевірте роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (Nullish coalescing operator).
 */

const incomingValue = false;
const defaultValue = 10;

let value;

if (incomingValue === null) {
  value = incomingValue;
} else if (incomingValue === undefined) {
  value = incomingValue;
} else {
  value = defaultValue;
}

if (incomingValue === null || incomingValue === undefined) {
  value = incomingValue;
} else {
  value = defaultValue;
}

value =
  incomingValue === null || incomingValue === undefined
    ? incomingValue
    : defaultValue;

value = incomingValue ?? defaultValue;

console.log(value);
