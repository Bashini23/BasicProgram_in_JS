function sumOfOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {  // Check if the number is odd
            sum += arr[i];
        }
    }
    return sum;
}
const array = [1, 2, 3, 4, 5, 6, 7, 9];
const sumOdd = sumOfOddNumbers(array);
console.log("The sum of all odd numbers is:", sumOdd);
