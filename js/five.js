const nums = [1, 2, 3, 4, 5, -6, 7];
const AllPositive = nums.every(number => number > 0);
if (AllPositive) {
    console.log("Усі числа в масиві є додатніми.");
} else {
    console.log("У масиві є невід'ємне число.");
}