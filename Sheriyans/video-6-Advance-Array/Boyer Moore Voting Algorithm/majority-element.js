// This algorithm is called the Boyer-Moore Voting Algorithm.

// It is one of the most efficient ways to find a majority element 
// (an element that appears more than $n/2$ times) because it works in $O(n)$ time and uses 
// $O(1)$ space.

//MAJORITY ELEMENT
//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.

const majorityElement = (arr) => {
    let ans = arr[0];
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if(count == 0){
            ans = arr[i]
            count = 1;
        }else if (ans == arr[i]) count++
        else count--
    }
    return ans
}
// let nums = [0, 0 , 0,  1  , 1 , 1 , 0 , 1 , 0 , 1]
let nums = [6 , 5 , 5]
console.log(majorityElement(nums));
