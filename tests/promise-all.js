function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

function delayFail(ms, reason) {
  return new Promise((_, reject) => setTimeout(() => reject(reason), ms));
}

async function run() {
  console.log('=== Promise.all / Promise.allSettled ===');

  try {
    const results = await Promise.all([
      delay(100, 'A'),
      delay(200, 'B'),
      delay(50, 'C'),
    ]);
    console.log('Promise.all success:', results);
  } catch (e) {
    console.log('Promise.all failed:', e);
  }

  try {
    const results = await Promise.all([
      delay(100, 'A'),
      delayFail(150, 'Error in B'),
      delay(50, 'C'),
    ]);
    console.log('Promise.all (should not reach):', results);
  } catch (e) {
    console.log('Promise.all with rejection caught:', e);
  }

  const settled = await Promise.allSettled([
    delay(100, 'X'),
    delayFail(150, 'Y failed'),
    delay(50, 'Z'),
  ]);
  console.log('Promise.allSettled:', JSON.stringify(settled, null, 2));
}

module.exports = { run };