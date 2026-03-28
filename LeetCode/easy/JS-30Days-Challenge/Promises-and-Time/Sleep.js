//Given a positive integer millis, write an asynchronous function that sleeps for millis
//  milliseconds. It can resolve any value.
//Note that minor deviation from millis in the actual sleep duration is acceptable

console.log('file runing ===>');

async function sleep(millis , t) {
    console.log('function run');
    
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log(Date.now() - t);
            resolve('Done')
        }, millis)
    })
}

(async() => {

    const t = Date.now()
    let funcReturn = await sleep(100 , t)
    .then((msg) => {
        console.log('hey i am ' , Date.now() - t);
        return msg
    })
})()

