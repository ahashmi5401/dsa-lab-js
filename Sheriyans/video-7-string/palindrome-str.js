function palindrome(str){
    let revStr = str.split('').reverse().join('')
    let palindrome ;
    if(revStr == str){
        palindrome = true
        return `This string is palindrome bcz after reverse and before reverse both same`
    }else{
        palindrome = false
        return `This string is not palindrome bcz after reverse and before reverse both are not same`
    }
}
console.log(palindrome('madam'));


//Effiecient Way bcz in first , copy array
const palindromeChecker = (str) =>{
    let left = 0;
    let right = str.length -1;

    while(left <= right){
        if(str[left] !== str[right]){
            return `This String is Not Palindrome `
        }
        left++
        right--
    }
    return `The given string is palindrome bcz before & after reverse are same`
}
console.log(palindromeChecker('ayan'));
