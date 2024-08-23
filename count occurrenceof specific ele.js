function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}
const array = [1, 2, 3, 4, 2, 5, 3, 6, 2];
const targetElement = 3;
const occurrenceCount = countOccurrences(array, targetElement);
console.log(`The element ${targetElement} occurs ${occurrenceCount} times in the array.`);
