function countOfPositives() {
  // function body goes here
  function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length === 0) {
      return [];
    } // if the input is not an array or the array is empty, return an empty array. this is a guard clause. always put it at the top of the function.

    let counterPositive = 0;
    let counterNegative = 0;
    let finalArray = []; // create a final array to push the counterPositive and counterNegative into. both accumulators start at 0.

    for (num of input) {
      num > 0 ? (counterPositive += 1) : (counterNegative += num); // if the number is greater than 0, add 1 to the counterPositive. if not, add the number to the counterNegative
    }

    finalArray.push(counterPositive, counterNegative); // push the counterPositive and counterNegative into the finalArray
    return finalArray; // return the finalArray

    //i could have also done this:
    // return [counterPositive, counterNegative]
  }
}
