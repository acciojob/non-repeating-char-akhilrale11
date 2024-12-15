function firstNonRepeatedChar(str) {
    // If the string is empty, return null
    if (str.length === 0) {
        return null;
    }

    // Create an object to count how many times each character appears
    const charCount = {};

    // Count each character in the string
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If all characters are repeated, return null
    return null;
}

// Examples
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
console.log(firstNonRepeatedChar('abc'));     // Output: 'a'
console.log(firstNonRepeatedChar(''));        // Output: null
