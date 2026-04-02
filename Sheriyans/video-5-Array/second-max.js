function maxEle(arr){
    if(arr.length < 2) return `Minimum length of array is 2`
    let max, secondMax;
    if (arr[0] > arr[1]) {
        max = arr[0];
        secondMax = arr[1];
    } else {
        max = arr[1];
        secondMax = arr[0];
    }
    for (let i = 2; i < arr.length; i++) {
        if(arr[i] > max ){
            secondMax = max
            max = arr[i]
        }else if(arr[i] > secondMax && arr[i] !== max ){
            secondMax = arr[i] 
        }
    }
    return {
        max,
        secondMax
    }
}
arr = [1,2,3,4]
const maxEle1 = maxEle(arr)
console.log(maxEle1);


//second way to do this 
function maxEle2(arr){
    if(arr.length < 2) return `Minimum length of array is 2`
    let max = Math.max(arr[0] , arr[1]);
    let secondMax = Math.min(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        if(arr[i] > max ){
            secondMax = max
            max = arr[i]
        }else if(arr[i] > secondMax && arr[i] !== max ){
            secondMax = arr[i] 
        }
    }
    return {
        max,
        secondMax
    }
}
arr2 = [1,2,3,4]
const maxEle21 = maxEle2(arr2)
console.log(maxEle21);