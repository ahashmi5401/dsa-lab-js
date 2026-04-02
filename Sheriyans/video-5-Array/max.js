function maxEle(arr){
    let max = [0]
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
arr = [1,2,3,4]
const maxEle1 = maxEle(arr)
console.log(maxEle1);
