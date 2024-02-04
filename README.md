# Log 21 (Duration: 1/6 Months)
Today's lesson focused funtion, function parameters, how function works, argument vs parameters and function return.

---

### Practice Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
```js
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
const temperature = celsiusToFahrenheit(20);
const temperature1 = celsiusToFahrenheit(36);
const temperature2 = celsiusToFahrenheit(15);
console.log(temperature, temperature1, temperature2);
// PS C:\Projects\Log- 21> node practice1.js
// 68 96.8 59

```
---
### Practice Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
```js
function count_occurrences(numbers, target) {
  let count = 0;
  for (const number of numbers) {
    if (number === target) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const occurrencesOf5 = count_occurrences(numbers, 5);
const occurrencesOf25 = count_occurrences(numbers, 25);

console.log(occurrencesOf5);
console.log(occurrencesOf25);
// PS C:\Projects\Log- 21> node practice2.js
// 2
// 0

```
---
### Practice Task-3:
Write a function to count the number of vowels in a string.
```js
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

```
---
### Practice Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
```js
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

```
---
### Practice Task-5:
Generate a random number between 10 to 20.
```js
const rand = Math.round(Math.random() * 10) + 10;
console.log(rand);
// PS C:\Projects\Log- 21> node practice5.js
// 17
// PS C:\Projects\Log- 21> node practice5.js
// 16
// PS C:\Projects\Log- 21> node practice5.js
// 19
// PS C:\Projects\Log- 21> node practice5.js
// 12

```
---
