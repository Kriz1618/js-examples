function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}

function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicatesReduce(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item);
    return acc;
  }, []);
}

function run() {
  console.log('=== Remove Duplicates ===');
  const nums = [1, 2, 2, 3, 4, 4, 5, 5, 5];
  console.log(`Input: [${nums}]`);
  console.log(`Set: [${removeDuplicatesSet(nums)}]`);
  console.log(`Filter: [${removeDuplicatesFilter(nums)}]`);
  console.log(`Reduce: [${removeDuplicatesReduce(nums)}]`);
}

module.exports = { run };