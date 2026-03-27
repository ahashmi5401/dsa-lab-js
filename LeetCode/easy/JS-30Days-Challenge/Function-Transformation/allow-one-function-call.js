//Given a function fn, return a new function that is identical to the original function
//  except that it ensures fn is called at most once.
//The first time the returned function is called, it should return the same result as fn.
//Every subsequent time it is called, it should return undefined.

var once = function(fn) {
    let result ;
    
    let called ;
    return function(...args){
        if(called) {
            return
        } 
        called = true
        result = fn(...args)
       return result 
    }
};


let fn = (a,b,c) => ( a + b +c)
let onceFn = once(fn)

onceFn(5, 7, 4)

onceFn(5, 7, 4)
