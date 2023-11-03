function containsDuplicate(nums) {
  let counterObject = {};
  for (let num of nums) {
    if (counterObject[num]) {
      return true;
    } else {
      counterObject[num] = true;
    } 
  }
  return false;
}


let nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));