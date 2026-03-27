//Apply Transform Over Each Element in Array
//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    return arr.map((item , idx) => fn(item , idx))
};

function plusone(n){
    return n+1
}
function plusI(n , i){
    return n + i
}
function constant(){
    return 42
}
console.log(map([1,2,3] , constant));

