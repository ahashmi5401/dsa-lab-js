function rightAngleTriangle6(n){
    for(let i = 1 ; i <= n ; i++){
        for (let j = n; j >=i ; j--) {
            process.stdout.write("   ")
        }
        for (let k = 1; k <= i; k++) {
            process.stdout.write(" * ")
            
        }
        for (let j = 2; j <=i ; j++) {
            process.stdout.write(" * ")
        }
        console.log();
    }
}
rightAngleTriangle6(10)
