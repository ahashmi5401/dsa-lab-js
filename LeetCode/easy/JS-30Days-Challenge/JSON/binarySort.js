// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn 
// only returns numbers and those numbers determine the sort order of sortedArr. sortedArr 
// must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

//this is the binary sort working for short length array not like if element in thousand 



var sortBy = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0 ; j < arr.length ; j++){
            if(fn(arr[j]) > fn(arr[j+1])){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
};

const sortByValue = (x) => {
    return x;
};

console.log(sortBy([4, 2, 3, 1, 5], sortByValue));



//ARRAY OF OBJ SORTING ASCENDING
//Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

var sortBy = function(arr, fn) {
    for (let i = 0; i < arr.length ; i++) {
        for(let j = 0 ; j < arr.length -1; j++){
            if(fn(arr[j]) > fn(arr[j+1])){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
};

const sortByObjectKey = (d) => {
    return d.x;
};

console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], sortByObjectKey));


//2d array sorting 
//Explanation: arr is sorted in ascending order by number at index=1.
var sortBy = function(arr, fn) {
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = 0; j < arr.length -1; j++) {
            if(fn(arr[j]) > fn(arr[j+1])){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
};

const sortBySecondElement = (x) => {
    return x[1];
};

console.log(sortBy([[3, 4], [5, 2], [10, 1]], sortBySecondElement));