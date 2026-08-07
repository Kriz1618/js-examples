const assert = require('assert');

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

function isPalindromeIterator(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let midSize = Math.floor(cleanedStr.length / 2);
  for (let i = 0; i < midSize; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}


function run() {
  console.log('=== Palindrome Check ===');
  const tests = ['anA', 'racecar', 'hello', 'A man, a plan, a canal: Panama', 'No lemon, no melon'];
  for (const test of tests) {
    console.log(`"${test}" → ${isPalindrome(test)}`);
  }
}

module.exports = { run };
