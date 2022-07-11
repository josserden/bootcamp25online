// todo Example 10 - Оператор % та методи рядків
/*
 * Напиши скрипт який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

* 70 покаже 01:10
* 450 покаже 07:30
*1440 покаже 24:00
 */

const totalMinutes = 70;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;

// hours = hours < 10 ? `0${hours}` : hours;
// minutes = minutes < 10 ? `0${minutes}` : minutes;

hours = String(hours).padStart(2, 0);
minutes = String(minutes).padStart(2, 0);

console.log(`${hours}:${minutes}`);
