function array(arr){
    j = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
            j++
        }else{
            arr[i]
        }
    }
    console.log(arr);
    
}
let arr = [1,0,1,0,0,1,1]
array(arr)

console.log('=========================> A');

//another method
function array1(arr){
    for (let i = 0 , j = 0; i < arr.length; i++ ) {
        if(arr[i] === 0){
            let temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
            j++
        }else{
            arr[i]
        }
    }
    console.log(arr);
    
}
let arr2 = [1,0,1,0,0,1,1]
array1(arr2)