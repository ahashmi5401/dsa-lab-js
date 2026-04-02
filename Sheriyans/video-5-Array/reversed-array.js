//reversed array with new array

function reversedArray(arr){
    
    let  reverseArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }

    return reverseArr
}
let arr = [0 , 1, 2, 3, 4];
let reverseArr = reversedArray(arr)
console.log(reverseArr);

//Example 2 => reversed array with new array

function reversedArray1(arr){
    
    let  reverseArr = new Array(arr.length);

    let j = 0;
    for (let i = arr.length-1; i >= 0; i--) {
        reverseArr[j] = arr[i]
        j++
    }

    return reverseArr
}
let arr2 = [0 , 1, 2, 3, 4];
let reverseArr2 = reversedArray1(arr)
console.log(reverseArr2);


//Reverse Array WithOut creating new Array
function reversedArray11(arr){
    let j = 0;
    let i = arr.length - 1
    while (j < i){
        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        j++
        i--
    }

   return arr
}
let array = [1,2,3,4,5]
let reverse = reversedArray11(array)
console.log(reverse);



//second way do with for loop
function reversedArray12(arr){
    for (let j = 0,i = arr.length - 1; j < i ; i-- , j++) {
            let temp = arr[j]; //4<0 => 1
            arr[j] = arr[i] // 1==4 
            arr[i] = temp; // arr[4] == arr[0] => 5 = 1
    }

   return arr
}
let array1 = [1,2,3,4,5]
let reverse1 = reversedArray12(array1)
console.log(reverse1);
