function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

function twoSumMap(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
  return [];
}

function run() {
  console.log('=== Two Sum ===');
  const nums = [2, 7, 11, 15];
  console.log(`nums=[2,7,11,15], target=9 (brute): [${twoSumBruteForce(nums, 9)}]`);
  console.log(`nums=[2,7,11,15], target=9 (map): [${twoSumMap(nums, 9)}]`);
  console.log(`nums=[3,2,4], target=6 (map): [${twoSumMap([3, 2, 4], 6)}]`);
}

module.exports = { run };