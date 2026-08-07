function deepCloneJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepCloneManual(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (seen.has(obj)) return seen.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  seen.set(obj, clone);

  for (const key of Reflect.ownKeys(obj)) {
    clone[key] = deepCloneManual(obj[key], seen);
  }

  return clone;
}

function run() {
  console.log('=== Deep Clone ===');
  const original = { a: 1, b: { c: 2, d: [3, 4] }, e: [{ f: 5 }] };
  const cloneJSON = deepCloneJSON(original);
  const cloneManual = deepCloneManual(original);

  cloneJSON.b.c = 99;
  cloneManual.b.d.push(6);

  console.log('Original:', JSON.stringify(original));
  console.log('JSON clone (modified b.c=99):', JSON.stringify(cloneJSON));
  console.log('Manual clone (modified b.d+6):', JSON.stringify(cloneManual));
  console.log('Original unchanged:', JSON.stringify(original));
}

module.exports = { run };