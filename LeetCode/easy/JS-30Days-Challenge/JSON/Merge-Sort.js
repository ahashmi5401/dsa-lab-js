//better to use instead binary sort if array is containing > thousand of element

var sortBy = (arr , fn) => {
    if(arr.length <= 1) return  arr;

    //split arry into two part
    let length = arr.length
    let mid = Math.floor(length/2)
    let left = sortBy(arr.slice(0,mid) , fn)
    let right = sortBy(arr.slice(mid) , fn)

    //merge them 
    return merge (left, right , fn)
}

function merge(left , right , fn){
    let result = []
    let i = 0 ; //pointer for left
    let j = 0 ; //pointer for right 
    //select small one to push first
    while(i < left.length && j < right.length){
        if(fn(left[i]) <= fn(right[j])){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j]);
            j++
        }
    }
    return [...result , ...left.slice(i) , ...right.slice(j)]
}

console.log('if simple array' , sortBy([5,4,3,2,1] , (x) => x));

console.log('if array of obj' ,  sortBy([{"x": 1}, {"x": 0}], (d) => d.x));

console.log('if 2d array' ,  sortBy([[5,4],[3,2],[1]] , (x) => x[1]));
