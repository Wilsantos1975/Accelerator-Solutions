let wordPattern = function(pattern, s) {

    let counterPatternToWord = {};  // {a: dog, b: cat}
    let counterWordToPattern = {}; // {dog: a, cat: b}  

    let sArray = s.split(' '); // [dog, cat, cat, dog]

     if (pattern.length !== sArray.length) {
        return false; // Different lengths, no bijection.   
        // if pattern is 'abba' and s is 'dog cat cat' then return false
    }

    for (let i = 0; i < pattern.length; i++) {
        const currentChar = pattern[i] ;// current char in string pattern
        // console.log(currentChar) // a, b, b, a 
        const currentWord = sArray[i]; // current word inside splitted array 
        // console.log(currentWord) // dog, cat, cat, dog

        if(counterPatternToWord[currentChar] && counterPatternToWord[currentChar] !== currentWord) {
            // if currentChar is in counterPatternToWord and currentChar is not equal to currentWord.  // {a: dog, b: cat}

            return false
        }

        if(counterWordToPattern[currentWord] && counterWordToPattern[currentWord] !== currentChar) {
            // if currentWord is in counterWordToPattern and currentWord is not equal to currentChar. // {dog: a, cat: b}   
            return false
        }

       counterPatternToWord[currentChar] = currentWord; // {a: dog, b: cat}
       counterWordToPattern[currentWord] =  currentChar;  // {dog: a, cat: b}


    }
        return true // if all conditions are met, return true.
       
};

console.log(wordPattern('abba', 'dog cat cat dog')) // true
console.log(wordPattern('abba', 'dog cat cat fish')) // false
console.log(wordPattern('aaaa', 'dog cat cat dog')) // false
console.log(wordPattern('abba', 'dog dog dog dog')) // false