const numbers = [45, 80, 32, 100, 105];
const isAnyNumberGreaterThan100 = numbers.some(number => number > 100);
if (isAnyNumberGreaterThan100) {
    console.log("У масиві є число більше 100.");
} else {
    console.log("У масиві немає чисел більше 100.");
}