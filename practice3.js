function noOfVowels(string) {
  const vowels = "aeiou";
  let count = 0;
  for (const char of string) {
    if (vowels.toLowerCase().includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

const vowelCounter = noOfVowels("sequoiaoeu");
const vowelCounter2 = noOfVowels("sequoiaoeuii");
console.log(vowelCounter, vowelCounter2);
// PS C:\Projects\Log- 21> node practice3.js
// 8 10
