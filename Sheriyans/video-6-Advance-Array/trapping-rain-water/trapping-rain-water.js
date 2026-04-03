//Trapping Rain Water
//Given n non-negative integers representing an elevation map where the width of each bar is 1,
//compute how much water it can trap after raining.

const trap = function(arr) {
    let left = new Array(arr.length)
    let right = new Array(arr.length)
    let leftMax = arr[0]
    let rightMax = arr[arr.length-1]
    left[0] = leftMax , right[right.length -1] = rightMax

    for (let i = 1; i < left.length; i++) {
        leftMax = Math.max(arr[i] , leftMax) 
        left[i] = leftMax
    }
    for (let i = left.length - 1; i >= 0; i--) {
        rightMax = Math.max(arr[i] , rightMax) 
        right[i] = rightMax
    }
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += Math.min(left[i] , right[i]) - arr[i]
    }
    return ans
};

console.log(trap([4,2,0,3,2,5]));

console.log("============================>Effiecient Method for this Problem<============================");

//Efficient Way to do this
const trap1 = (height) => {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while(left < right){
        if(height[left] < height[right]){
            if(height[left] > leftMax){
                leftMax = height[left]
            }else{
                totalWater += leftMax - height[left]
            }
            left++
        }else{
            if(height[right] > rightMax){
                rightMax = height[right]
            }else{
                totalWater += rightMax - height[right]
            }
            right--
        }
    }
    return totalWater
}

let height = [4,2,0,3,2,5]
console.log(trap1(height));
