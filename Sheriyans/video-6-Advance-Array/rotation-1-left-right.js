//Not Effiecient Way To do this => n^2 time complexity

//each element 
//left rotation by one
//har element 1 index left side pe jaiga jaise  index 1 wala index 0 mgr index 0 wala last pe

function moveLeft(arr){
    let copy = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = copy
    return arr
}
console.log(moveLeft([1,2,3,4]));


//right rotation by one 
//har element 1 index  right side pe jaiga jaise  index 1 wala index 2 mgr index last  wala 1st pe

function moveRight(arr){
     let copy = arr[arr.length -1];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i-1]
     }
     arr[0] = copy
     return arr
}

let arr2 = [ 1, 2, 3, 4 , 5]
console.log(moveRight(arr2));


console.log("Hey K number");

function moveRight2(arr, k) {
    // If k is larger than the array, we use % to avoid extra loops
    k = k % arr.length; 

    for (let j = 0; j < k; j++) {
        let lastEle = arr[arr.length - 1];
        
        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        
        arr[0] = lastEle;
    }
    return arr;
}

let arr3 = [1, 2, 3, 4, 5];
let rotations = 3;

// Correct way to call: pass both arr and rotations
console.log(moveRight2(arr3, rotations)); 
// Output: [3, 4, 5, 1, 2]




//k left rotation
function leftRotation(arr , k){
    k = k % arr.length;
    for (let j = 0; j < k; j++) {
        let lastEle = arr[0]
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i+1]
        }
        arr[arr.length - 1] = lastEle
    }
    return arr
}

console.log(leftRotation([4,1,2,3]));
