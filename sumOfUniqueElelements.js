let sumOfUnique = function (nums) {
  let counter = {};
  let sum = 0;

  for (let num of nums) { // first loop through nums array to check if num is in counter object, first pass
    if (counter[num]) { // if num is in counter object
      counter[num]++; // increment by 1
    } else { // if num is not in counter object
      counter[num] = 1; //
    }
  }

  for (let num of nums) { // second loop through nums array to check if num is in counter object, second pass
    if (counter[num] === 1) { // if num is in counter object and num is equal to 1 
      sum += num; // add num to sum
    }
  }
  return sum; // return sum
};

console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1, 1])); // 0
console.log(sumOfUnique([1, 2, 3, 4, 5])); // 15
console.log(sumOfUnique([10, 6, 9, 6, 9, 6, 8, 7])); // 25

