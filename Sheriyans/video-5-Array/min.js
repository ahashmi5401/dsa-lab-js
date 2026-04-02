function minEle(arr) {
    if (arr.length === 0) return "Array is empty"; // Guard clause
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}