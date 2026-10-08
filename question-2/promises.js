// Method to return a resolved promise after a 500ms timeout
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

// Method to return a rejected promise after a 500ms timeout
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};

// Calling both promises and handling the results
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));