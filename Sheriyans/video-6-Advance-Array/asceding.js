const ascending  = function(arr) {
    let j = 0;
    for (let i = 0; i < arr.length ; i++) {
        if(arr[j] > arr[i]) {
            arr[j] = arr[i] 
            j++
        }else{
            arr[i] = arr[i]
        }
    }
    return nums
};

let nums = [2,2,1,1,1,2,2 , 3 ,4 ]
console.log(ascending(nums));
