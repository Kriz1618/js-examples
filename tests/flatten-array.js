function flattenRecursive(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenRecursive(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

function flattenDepth(arr, depth = 1) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

function run() {
  console.log('=== Flatten Array ===');
  const nested = [1, [2, [3, [4, 5]]]];
  console.log(`Input: ${JSON.stringify(nested)}`);
  console.log(`Full flatten: ${JSON.stringify(flattenRecursive(nested))}`);
  console.log(`Depth 1: ${JSON.stringify(flattenDepth(nested, 1))}`);
  console.log(`Depth 2: ${JSON.stringify(flattenDepth(nested, 2))}`);
}

module.exports = { run };