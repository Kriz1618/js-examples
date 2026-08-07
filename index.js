const path = require('path');
const fs = require('fs');

const TESTS_DIR = path.join(__dirname, 'tests');

const AVAILABLE_TESTS = fs.readdirSync(TESTS_DIR)
  .filter(f => f.endsWith('.js'))
  .map(f => f.replace('.js', ''))
  .sort();

function listTests() {
  console.log('\nAvailable tests:');
  AVAILABLE_TESTS.forEach(name => console.log(`  - ${name}`));
  console.log(`\nUsage: node index.js <test-name>`);
  console.log(`Example: node index.js palindrome`);
}

async function runTest(name) {
  const testName = name.toLowerCase().replace(/[\s_]+/g, '-');

  if (!AVAILABLE_TESTS.includes(testName)) {
    console.error(`Test "${name}" not found.\n`);
    listTests();
    process.exit(1);
  }

  const testPath = path.join(TESTS_DIR, `${testName}.js`);
  console.log(`Running test: ${testName}\n`);
  const test = require(testPath);
  await test.run();
}

async function main() {
  const testName = process.argv[2];

  if (!testName) {
    listTests();
    process.exit(1);
  }

  if (testName === 'list' || testName === '--list' || testName === '-l') {
    listTests();
    process.exit(0);
  }

  if (testName === 'all' || testName === '--all' || testName === '-a') {
    console.log('Running all tests...\n');
    for (const name of AVAILABLE_TESTS) {
      await runTest(name);
      console.log('');
    }
    process.exit(0);
  }

  await runTest(testName);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});