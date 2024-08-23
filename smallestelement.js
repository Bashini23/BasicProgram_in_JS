function findSmallest(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
const array = [5, -3, 9, 1, 7, -2, 10];
const smallestElement = findSmallest(array);
console.log("The smallest element is:", smallestElement);
