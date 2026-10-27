function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Cada pasada coloca el siguiente más grande al final
        for (let j = 0; j < n - i - 1; j++) {
          console.log('6', 'j - i', j, i, n - i - 1);
            if (arr[j] > arr[j+1]) {
                console.log('8', 'values arr[j], arr[j+1]', arr[j], arr[j+1]);
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }

            console.log(`j: ${j}, current arr: [${arr}]`);
        }
    }
    return arr;
}

function run() {
  console.log('=== Bubble Sort ===');
  const nums = [64, 34, 25, 12, 22, 11, 90];
  console.log(`nums=[${nums}], sorted: [${bubbleSort([...nums])}]`);
}

module.exports = { run };
