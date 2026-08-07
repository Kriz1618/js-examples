function isPalindromeBuiltin(word) {
  return word.toLowerCase().split('').reverse().join('') === word.toLowerCase();
}

function isPalindromeTwoPointer(str) {
  const cleaned = str.replaceAll(' ', '').toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

function run() {
  console.log('=== Palindrome ===');
  console.log(`"Oso" (built-in): ${isPalindromeBuiltin('Oso')}`);
  console.log(`"arroz a la zorra" (two-pointer): ${isPalindromeTwoPointer('arroz a la zorra')}`);
  console.log(`"hello" (two-pointer): ${isPalindromeTwoPointer('hello')}`);
}

module.exports = { run };