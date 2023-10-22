const words = ["a", "b", "c", "ab", "ac", "bc", "abc"];

function numberOfValidWords(words) {
  let counter = 0;

  for (i = 0; i < words.length; i++) {
    let splitSentence = words[i].split(" "); // split the sentence into an array of words to compare

    if (splitSentence.length > counter) {
      // if the length of the array is greater than the counter, then the counter is equal to the length of the array

      counter = splitSentence.length; // counter is equal to the length of the array
    }
  }
  return counter;
}

console.log(numberOfValidWords(words));
