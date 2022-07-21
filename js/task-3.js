const arr = [
  {
    name: 'test',
    value: 1,
    children: [
      {
        name: 'test2',
        value: 2,
        children: [{ name: 'test3', value: 3 }],
      },
    ],
  },
];

const getValues = array => {
  return array.reduce((acc, { name, value, children }) => {
    acc[name] = value;

    if (children) {
      acc = { ...acc, ...getValues(children) };
    }

    return acc;
  }, {});
};

console.log(getValues(arr));

// {test: 1, test2: 2, test3: 3}
