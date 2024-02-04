function findLongestWord(inputString) {
  const wordsArray = inputString.split(" ");
  let longestWord = "";
  let maxLength = 0;

  for (const word of wordsArray) {
    // Check if the current word is longer than the current longest word
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }
  return longestWord;
}

const inputString = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(inputString);
console.log(longestWord);
// PS C:\Projects\Log- 21> node practice4.js
// Programming
