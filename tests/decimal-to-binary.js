function decimalToBinaryBuiltin(num) {
  return num.toString(2);
}

function decimalToBinaryManual(num) {
  let number = num;
  let binary = (number % 2).toString();

  while (number > 1) {
    number = parseInt(number / 2);
    binary = (number % 2) + binary;
  }

  return binary;
}

function run() {
  console.log('=== Decimal to Binary ===');
  const tests = [8, 42, 255, 1024];
  for (const n of tests) {
    console.log(`Decimal: ${n}, Binary (built-in): ${decimalToBinaryBuiltin(n)}, Binary (manual): ${decimalToBinaryManual(n)}`);
  }
}

module.exports = { run };