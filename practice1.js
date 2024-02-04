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
