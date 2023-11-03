var search = function(nums, target) {

    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) /2); 
        let currentValue = nums[middleIndex];
        

        if(currentValue === target) {
            return middleIndex
        } else if(currentValue > target) {
                rightIndex = middleIndex -1
        } else if(currentValue < target) {
                leftIndex = middleIndex +1
        }

    }
    return -1
    
};

const nums = [-1,0,3,5,9,12]
const target = 9
console.log(search(nums, target))