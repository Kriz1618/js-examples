function fibonacciRecursive(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacciRecursive(n - 1, memo) + fibonacciRecursive(n - 2, memo);
  return memo[n];
}

function fibonacciIterative(n) {
  if (n <= 1) return n;
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

function fibonacciSequence(n) {
  const seq = [];
  for (let i = 0; i <= n; i++) {
    seq.push(fibonacciIterative(i));
  }
  return seq;
}

function run() {
  console.log('=== Fibonacci ===');
  console.log(`Sequence (0-10): [${fibonacciSequence(10).join(', ')}]`);
  console.log(`fib(10) recursive: ${fibonacciRecursive(10)}`);
  console.log(`fib(10) iterative: ${fibonacciIterative(10)}`);
}

module.exports = { run };