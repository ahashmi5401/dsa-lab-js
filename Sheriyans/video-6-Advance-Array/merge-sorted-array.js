//return how many unique element in array
function merge(arr1 , arr2){
    if(arr1.length == 0 || arr2.length == 0) return `Array Length is 0`

    let mergedArr = []
    let j = 0;
    let i = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        mergedArr.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        mergedArr.push(arr2[j])
        j++
    }
    return mergedArr
}
let arr1 = [2,4,5,7]
let arr2 = [1,3,6,8]
console.log(merge(arr1 , arr2));
