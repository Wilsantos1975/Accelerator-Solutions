function firstUniqChar (words) {
  let charCount = {};

  for (let letter of words) {
    if (charCount[letter]) {
      charCount[letter]++;
    } else {
      charCount[letter] = 1;
    }
  }
  for (i = 0; i < words.length; i++) {
    if (charCount[words[i]] === 1) {
      return i;
    }
  }
  return -1;
};

const words = "leetcode";
console.log(firstUniqChar(words));
