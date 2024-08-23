function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}
const inputString = "My favourite place is Paris!";
const vowelCount = countVowels(inputString);
console.log("The number of vowels in the string is:", vowelCount);
