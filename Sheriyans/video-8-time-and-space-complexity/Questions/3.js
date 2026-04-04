function test(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            sum += 1
        }
    }
    return sum
}


//TIME Complexity is n^2 both loop run to n

//Space Complexity is 0(1)