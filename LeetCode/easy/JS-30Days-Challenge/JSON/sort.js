// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn 
// only returns numbers and those numbers determine the sort order of sortedArr. sortedArr 
// must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

let sortedArr = []
 var sortBy = function(arr, fn) {
    let newArr = arr.map((item) => (
        fn(item)
    ))
   return newAr
 };

function sorting(ele){
    
}
console.log(sortBy([12,1,2,12,1,21,2], sorting ));
let ajeeb = [{"x": 1}, {"x": 0}, {"x": -1}]