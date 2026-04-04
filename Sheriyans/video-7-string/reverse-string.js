console.time()
function reverse(str){
    if(str.trim() === "") return `Empty String`
    if(str.trim().length === 1) return str

    let newStr = ""
    for (let i = str.length -1 ; i >= 0; i--) {
        newStr += str[i]
    }
    console.log(newStr);
}
reverse("nayA")
console.timeEnd()

//Efficient way to do this
console.time()
const reverse1 = (str) => {
    let reverse = str.split("").reverse().join('')
    console.log(reverse);
}

reverse1("nayA")
console.timeEnd()