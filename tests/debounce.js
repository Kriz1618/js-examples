function debounce(fn, delayMs) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delayMs);
  };
}

function throttle(fn, intervalMs) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= intervalMs) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('=== Debounce & Throttle ===');

  let debounceCount = 0;
  const debounced = debounce(() => {
    debounceCount++;
    console.log('Debounced call executed');
  }, 100);

  console.log('Calling debounced 5 times rapidly...');
  for (let i = 0; i < 5; i++) {
    debounced();
  }

  let throttleCount = 0;
  const throttled = throttle(() => {
    throttleCount++;
    console.log('Throttled call executed');
  }, 200);

  console.log('\nCalling throttled 5 times rapidly...');
  for (let i = 0; i < 5; i++) {
    throttled();
  }

  await delay(300);
  console.log(`\nDebounce executed ${debounceCount} time(s) (expected: 1)`);
  console.log(`Throttle executed ${throttleCount} time(s) (expected: 1)`);
}

module.exports = { run };