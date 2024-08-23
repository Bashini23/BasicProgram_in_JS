function checkIfExists(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true; 
        }
    }
    return false;
}
const array = [1, 2, 3, 4, 5];
const targetNumber = 7;
const exists = checkIfExists(array, targetNumber);
console.log(`Does the number ${targetNumber} exist in the array?`, exists);
