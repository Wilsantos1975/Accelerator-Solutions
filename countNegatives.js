var countNegatives = function (grid) {
  let counterOfNegatives = 0;

  for (let row of grid) {
    let left = 0;
    let right = row.length;
    while (left <= right) {
      let middlePoint = Math.floor((left + right) / 2);
      if (row[middlePoint] >= 0) {
        left = middlePoint + 1;
      } else {
        right = middlePoint - 1;
      }
    }
    counterOfNegatives += row.length - left;
  }
  return counterOfNegatives;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid));
// explaination:    
// 1.  [-1] -> 1 negative number first row  
// 2.  [-1] -> 1 negative number second row
// 3.  [-2, -1] -> 2 negative numbers  third row
// 4.  [-3, -2, -1] -> 3 negative numbers   
//  
// 1 + 1 + 2 + 3 = 7 negative numbers
//     