/*
Є багатомірний масив. Треба зробити його розгладити на один рівень
*/

const arr = [
  12,
  [34, [2, [[[[[33]]]]]]],
  34,
  [23],
  'hello',
  ['five', ['some arr', ['last arr'], { name: 'John' }]],
];

//  [12,34,2,33,34,23,'hello','five','some arr','last arr', { name: 'John' }]

const getFlatArray = array => {
  // return array.flat(Infinity);

  let result = [];

  array.forEach(element => {
    if (Array.isArray(element)) {
      result = [...result, ...getFlatArray(element)];
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(getFlatArray(arr));
