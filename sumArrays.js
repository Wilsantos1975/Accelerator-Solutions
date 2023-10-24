const numbers = [2, 1, 23, 45, 5.5, 67, 4.3, 90];

function sum(numbers) {
  let sumTotalToReturn = 0;
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  for (let number of numbers) {
    sumTotalToReturn += number;
  }

  return sumTotalToReturn;
}

console.log(sum(numbers));
