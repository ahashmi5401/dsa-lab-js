//Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

//The fn function takes one or two arguments:
//arr[i] - number from the arr
//i - index of arr[i]
//filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i)
//  evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
//Please solve it without the built-in Array.filter method.
let arr = [0,10,20,30]
let i = 0
var filter = function(arr, fn) {
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(fn(element , i)){
            filteredArr.push(element)
        }
    }
    return filteredArr
};

function greaterThan10(element ){
   return element > 10 ? true : false
}
function firstIndex(element , i){
    return i === 0
}
function plusone(element) {
    return (element + 1) !== 0;
}
console.log(filter(arr , plusone))