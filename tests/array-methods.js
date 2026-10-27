function run() {
  console.log('=== Array Methods (trace output) ===');

  const arr1 = [7, 5, 4, 6, 2];
  const arr2 = arr1;
  const arr3 = [...arr2];
  arr3.unshift(1);
  arr2.push(-2);
  arr1.shift();
  arr1.pop();

  const val1 = arr3.some(x => x < 2);
  const val2 = arr1.every(x => x > 3);

  console.log(`arr1: [${arr1}]`);
  console.log(`arr2: [${arr2}]`);
  console.log(`arr3: [${arr3}]`);
  console.log(`some(x < 2): ${val1}, every(x > 3): ${val2}`);

  const arr = ['a', 'b', 'a', 'c', 'b', 'a'];

  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  console.log(`Character counts in [${arr}]:`, counts);

  const nestedArr = [[1],2,[3, [4, [5], 6, [7, 8], 9], 10, [11]]];
  console.log(`Nested array: [${nestedArr}], Flated: ${nestedArr.flat(Infinity)}`);

  const duplicates = new Set(arr.filter((item, index) => arr.indexOf(item) !== index));
  console.log(`Duplicates in [${arr}]:`, [...duplicates]);
}

module.exports = { run };
