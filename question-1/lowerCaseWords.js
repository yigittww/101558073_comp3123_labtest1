// Function to filter out non-strings and convert strings to lowercase
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Error: The input provided is not an array.");
            return;
        }

        // Filter for strings and convert them to lower case
        const filteredStrings = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());

        if (filteredStrings.length >= 0) {
            resolve(filteredStrings);
        } else {
            reject("Error processing the array.");
        }
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Call the function and handle the promise
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));