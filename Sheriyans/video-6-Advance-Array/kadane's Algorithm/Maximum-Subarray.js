//Kadane's Algorithm
//Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubArray(arr){
    let sum = 0 
    let maxSum = -Infinity //bcz hoskta hai aik array me pure negative ho

    if(arr.length == 1 ) {
        maxSum = arr[0] 
        return maxSum
    }
    for (let i = 0; i < arr.length; i++) {

        sum += (arr[i])
        //same logic but different syntax
        // if(sum > maxSum){
        //     maxSum = sum; 
        // }

        //2nd way short
        maxSum = Math.max(maxSum , sum)

        //negativee hogaya tou 0 isliye kiya ye negative age bhi jo add honge wo bhi sub
        //hojaiga or effect karge baad ki calculation mai
        if(sum < 0) sum = 0 
    }
    return maxSum
    
}
let arr =  [-4 , 1 , 2 , 3]
console.log(maxSubArray(arr));
