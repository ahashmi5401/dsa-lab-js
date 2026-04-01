function x(n) {//n always odd
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

            if (j === i || i + j === n + 1) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  ");
            }
        }
        console.log(); // Move to the next line
    }
}

x(5);