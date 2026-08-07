function reverseStringIterative(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverseStringBuiltin(str) {
  return str.split('').reverse().join('');
}

function run() {
  console.log('=== Reverse String ===');
  console.log(`Iterative: "${reverseStringIterative('onomatopeya')}"`);
  console.log(`Built-in:  "${reverseStringBuiltin('onomatopeya')}"`);
}

module.exports = { run };