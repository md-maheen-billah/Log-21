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
