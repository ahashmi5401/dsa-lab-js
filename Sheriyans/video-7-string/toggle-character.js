//string => "AbcD"output => "aBCd"
function toggle(str){
    let toggle = " ";
    for (let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            //convert in string 
            //bcz A value 65 , and a is 97 so we add 32
            toggle += String.fromCharCode(str.charCodeAt(i) + 32) 
        }else{
            toggle += String.fromCharCode(str.charCodeAt(i) - 32) 
        }
    }
    console.log(toggle);
    
}
toggle('AbcD')


//Efficient Way to do this
function toggleEfficient(str) {
    let n = str.length;
    let result = new Array(n);

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)

        // Bitwise trick: 32 is (1 << 5). 
        // Using XOR (^) with 32 toggles the 5th bit (case bit)
        // This one line replaces an entire if/else block for +32 and -32
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            result[i] = String.fromCharCode(code ^ 32)
        }else{
            result[i] = str[i]
        }
        
    }
    return result.join("");
}

console.log(toggleEfficient('aBCD'));
