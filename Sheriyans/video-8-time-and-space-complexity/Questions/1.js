function test(n){
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            console.log("Hello");
        }
    }
}


//time complexity for this is n^2 
//how ? 
// j = i maybe ye inner loop n-1 or n-2 or n-3 or n-4 tak chal so 

//step 1

// (n * (n-1))/2 

//step 2
// n^2/2 - n/2

//choti value ko hata do or constant ko 

//n^2 is time complexity 


//SPACE COMPLEXITY 
//0(1)