//Print n time msg by using Recursion
//print number 1 to n 
function msg(n){
    if(n === 0) return `End`
    console.log('Hello World');
    
    msg(n - 1) //ab ye 5 - 1 karke 4 =>> call karea '

    console.log(n); //last in first out last me gaya 1 magr call stack se sabse pehle one nikle ga LIFO
}
msg(5)

