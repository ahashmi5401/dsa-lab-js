//return how many unique element in array
function unique(arr){
    if(arr.length == 0) return `Array Length is 0`
    let j = 1;
    for (let i = 0; i < arr.length ; i++) {
        if(arr[j] !== arr[i]){
            arr[j] = arr[i]
            j++
        }
    }
    return j 
}
let arr = [1,1,2,2,3,4,5]
console.log(unique(arr));
