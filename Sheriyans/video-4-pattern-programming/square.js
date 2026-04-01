function square(n){
    for(let i =1; i <= n ; i++){
        console.log( ); //dummy for break line if use \n it create more space 
        for (let j = 1; j <= n; j++) {
            process.stdout.write(" x ")
        }
    }
}
square(4)