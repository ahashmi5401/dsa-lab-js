//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both 
// resolve with a number. The returned promise should resolve with the sum of the two numbers.
var addTwoPromises = async function(promise1, promise2) {
    let result = await promise1 + await promise2
    return result
};


let total = addTwoPromises(Promise.resolve(10), Promise.resolve(-2))
.then(item => console.log(item));
