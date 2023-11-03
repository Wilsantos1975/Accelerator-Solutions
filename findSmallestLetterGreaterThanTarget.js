var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1

        while(left <= right) {
            let midPoint = Math.floor((left + right) /2)

            if(  letters[midPoint] <= target ) {
                left = midPoint + 1
            } else if ( letters[midPoint] > target) {
                right = midPoint - 1
            } 
        }
        return left  === letters.length ? letters[0] : letters[left];
};

const letters = ["c", "f", "j"]
const target = "a"
console.log(nextGreatestLetter(letters, target))