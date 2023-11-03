var findNumbers = function(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        let numberToCheck = nums[i].toString();
        if(numberToCheck.length % 2 === 0) {
            total += 1
        }
    }
    return total
};

const nums = [12,345,2,6,7896]
console.log(findNumbers(nums))