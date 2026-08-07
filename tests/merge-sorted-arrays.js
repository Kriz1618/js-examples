function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
}


function mergeSortedArraysRecursive(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  if (arr1[0] < arr2[0]) {
    return [arr1[0], ...mergeSortedArraysRecursive(arr1.slice(1), arr2)];
  } else {
    return [arr2[0], ...mergeSortedArraysRecursive(arr1, arr2.slice(1))];
  }
}

function mergeSortedArraysIterator(arr1, arr2) {
  const result = [];

  for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
    if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  return result;
}

function run() {
  console.log('=== Merge Sorted Arrays ===');
  const a = [1, 3, 5, 7];
  const b = [2, 4, 6, 8, 10];
  console.log(`A: [${a}]`);
  console.log(`B: [${b}]`);
  console.log(`Merged: [${mergeSortedArrays(a, b)}]`);
  console.log(`Merged (Recursive): [${mergeSortedArraysRecursive(a, b)}]`);
  console.log(`Merged (Iterator): [${mergeSortedArraysIterator(a, b)}]`);
}

module.exports = { run };
