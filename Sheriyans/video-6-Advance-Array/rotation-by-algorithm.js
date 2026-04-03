//Ciruclar Indexing Approach 

console.time()
function rightRotation2(arr , k){

    let temp = new Array(arr.length);
    for (let i = 0; i <= arr.length - 1; i++) {
        temp[i] = arr[(i+k) % arr.length]
    }
    return temp 
}
let arr2 = [1,2,3,4,5]
let  k = 3

console.log(rightRotation2(arr2 , k));
console.timeEnd()


//More Effcient way bcz in first we copy array
//Triple Reverse Algorithm
//k=2 
//tou shuru ke array ke 2 element ko maar do reverse
//phr k index se leke arr.length -1 ko bhi kardo reverse
//phr pure array ko phr se reverse kardo


/**
 * TOPIC: TRIPLE REVERSE (REVERSAL ALGORITHM)
 * WHY: O(n) Time, O(1) Space. No extra array needed!
 */

console.time();

let array = [1, 2, 3, 4, 5];
let k1 = 3;
k1 = k1 % array.length; // Always do this first

// 1. Define a generic reverse function
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// 2. Apply the 3-step logic for RIGHT rotation
// Step 1: Reverse first part (0 to k-1) -> [3, 2, 1, 4, 5]
reverse(array, 0, k1 - 1);

// Step 2: Reverse second part (k to end) -> [3, 2, 1, 5, 4]
reverse(array, k1, array.length - 1);

// Step 3: Reverse the whole array -> [4, 5, 1, 2, 3]
reverse(array, 0, array.length - 1);

console.log("Rotated Array:", array);


console.timeEnd();



//same but this time toward right 
let array1 = [1,2,3,4,5];
k2 = 3;
k2 = k2 % array1.length

function leftRotation(arr , start , end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}
                                
                               //[1,2,3,4,5]
leftRotation(array1 , 0  , k2 - 1) //[3 , 2 ,1 , 4 , 5]

leftRotation(array1 , k2  , array1.length - 1) //[3 , 2 , 1 , 5 , 4 ]

leftRotation(array1 , 0 , array1.length - 1) // [4 , 5 , 1 , 2 , 3]
console.log(array1);


