function smallestMissingPositiveSet(nums) {
  const set = new Set(nums.filter(n => n > 0));
  let i = 1;
  while (set.has(i)) i++;
  return i;
}

function smallestMissingPositiveInPlace(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return n + 1;
}

function run() {
  console.log('=== Smallest Missing Positive ===');
  const tests = [
    [3, 4, -1, 1],
    [1, 2, 0],
    [7, 8, 9, 11, 12],
    [1, 2, 3],
    [],
  ];
  for (const arr of tests) {
    console.log(`[${arr}] → Set: ${smallestMissingPositiveSet([...arr])}, In-place: ${smallestMissingPositiveInPlace([...arr])}`);
  }
}

module.exports = { run };