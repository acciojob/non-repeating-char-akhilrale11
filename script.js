function firstNonRepeatedChar(str) {
    if (str.length === 0) {
        return null;
    }

    // Create a frequency map
    const charCount = new Map();

    // Count the frequency of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If no non-repeated character is found
    return null;
}

// Examples
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
console.log(firstNonRepeatedChar('abc'));     // Output: 'a'
console.log(firstNonRepeatedChar(''));        // Output: null
