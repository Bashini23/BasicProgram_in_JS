function countEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).length;
}
const array = [54, 3, 996, 12, 7, 8, 13, 10, 12];
const evenCount = countEvenNumbers(array);
console.log("The number of even numbers is:", evenCount);
