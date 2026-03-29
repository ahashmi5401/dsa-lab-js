const sum = (...prev) => {
    return prev.reduce((acc , val) => acc+val)
}
console.log(sum(2,2));
