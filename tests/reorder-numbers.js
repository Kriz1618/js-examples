const assert = require('assert');

function reorDerNumbers(num) {
  let strNum = num.toString();

  if (strNum.length < 2) {
    return num;
  }

  const numberArray = strNum.split('').sort((a, b) => b - a);

  return parseInt(numberArray.join(''));
}

function run() {
  console.log('=== Reorder Numbers ===');
  const number = 532814;
  console.log(`Original: [${number}]`);
  console.log(`Reordered: [${reorDerNumbers(number)}]`);

  assert(reorDerNumbers(532814) === 854321, 'Test case 1 failed');
  assert(reorDerNumbers(152634) === 654321, 'Test case 2 failed');
  console.log([1,2] + [3,4])
  console.log(typeof(function(){}))
}

module.exports = { run };
