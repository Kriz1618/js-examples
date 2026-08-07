function isBalanced(str) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (const ch of str) {
    if (Object.values(pairs).includes(ch)) {
      stack.push(ch);
    } else if (pairs[ch]) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

function run() {
  console.log('=== Balanced Parentheses ===');
  console.log(`"()[]{}": ${isBalanced('()[]{}')}`);
  console.log(`"([)]": ${isBalanced('([)]')}`);
  console.log(`"({[]})": ${isBalanced('({[]})')}`);
  console.log(`"(((": ${isBalanced('(((')}`);
}

module.exports = { run };