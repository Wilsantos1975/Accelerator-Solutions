let canConstruct = function (ransomNote, magazine) {
  let counter = {}; // {a: 1, b: 1}

  for (let char of magazine) { // first loop through magazine string to check if char is in counter object
    if (counter[char]) {
      // if char is in counter object
      counter[char]++; // increment by 1
    } else {
      // if char is not in counter object
      counter[char] = 1; // add char to counter object and set value to 1
    }
  }
//
  for (const char of ransomNote) {
    // loop through ransomNote string to check if char of the
    // ransom note  is in counter object which is magazine string
    if (counter[char]) {
      // if char is in counter object
      counter[char]--; // decrement by 1
    } else {
      // if char is not in counter object
      return false; // return false
    }
  }
  return true; // if all conditions are met, return true.
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("ab", "aab")); // true
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
); // true
console.log(canConstruct("aa", "ab")); // false
