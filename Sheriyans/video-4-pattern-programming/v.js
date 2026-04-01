function v(n){
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= (2*n); j++) {
            if(i == j){
                process.stdout.write('*')
            }else if(j+i === (2*n)){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        console.log();
        
    }
}

v(5)