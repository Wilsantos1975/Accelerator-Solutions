const firstKTimes = (arr, k) => {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }

    for (el in count) {
      if (count[el] >= k) {
        return el;
      }
    }
  }
};

const arr = [3, 4, 1, 5, 4, 2, 3, 5, 3, 4];
console.log(firstKTimes(arr, 2)); // 4
console.log(firstKTimes(arr, 3)); // 3
console.log(firstKTimes([1, 7, 4, 3, 4, 8, 7], 2)); // 4
