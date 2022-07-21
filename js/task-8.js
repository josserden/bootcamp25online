import { country } from './country.js';

/*
- name
- capital
- languages
- timezones
*/

const getCurrentValue = array =>
  array.map(({ name, capital, languages, timezones }) => ({
    name,
    capital,
    languages: languages.map(language => language.name).join(', '),
    timezones: timezones.join(),
  }));

console.log(getCurrentValue(country));
