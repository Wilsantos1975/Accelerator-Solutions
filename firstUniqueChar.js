function firstUniqChar (words) {
  let charCount = {};

  for (let letter of words) {
    if (charCount[letter]) {
      charCount[letter]++;
    } else {
      charCount[letter] = 1;
    }
  } // loop to create a hash table of the character count and check if the character is unique
  for (i = 0; i < words.length; i++) {
    if (charCount[words[i]] === 1) {
      return i;
    } // loop to the string to find the first instance of the unique character
  }
  return -1;
};

const words = "leetcode";
console.log(firstUniqChar(words));
