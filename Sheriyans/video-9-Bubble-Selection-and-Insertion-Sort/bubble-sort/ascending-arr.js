function ascending(arr){
    let n = arr.length
    for (let i = 0; i < n ; i++) {
       for (let j = 0; j < n - i; j++) {
        if(arr[j] >  arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
       }
    }
    return arr
}

let arr = [2, 5,3 ,4 ]
console.log(ascending(arr));
