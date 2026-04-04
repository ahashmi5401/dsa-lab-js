//**Reverse String II**
// Given a string s and an integer k, reverse the first k characters for every 2k characters 
// counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k 
// but greater than or equal to k characters, then reverse the first k characters and leave the 
// other as original.



var reverseStr = function(s, k) {
   // 1. String ko Array mein badlo (kyunki string change nahi hosakti)
    let arr = s.split("");

    // 2. Loop chalao aur har baar "2 * k" ka jump maaro
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k - 1;

        // Agar string khatam ho rahi ho aur k characters na bache hon
        if (right >= arr.length) {
            right = arr.length - 1;
        }

        if(left < right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp
            left++
            right--
        }
    }
    let revByK = arr.join('')
    return revByK
    
};
reverseStr("abcdefg" , 2)