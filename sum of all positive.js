function sumOfPositiveNumbers(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}
const array = [5, -3, -9, 1, 7, -8, 10, 12];
const sumPositive = sumOfPositiveNumbers(array);
console.log("The sum of all positive numbers is:", sumPositive);
